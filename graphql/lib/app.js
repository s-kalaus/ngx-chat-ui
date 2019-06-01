const { createLogger, format, transports } = require('winston');
const { ApolloServer } = require('apollo-server');
const { applyMiddleware } = require('graphql-middleware');
const { makeExecutableSchema } = require('graphql-tools');
const config = require('../config');
const typeDefs = require('../schemas');
const resolvers = require('../resolvers');
const { createPubSub, auth } = require('./graphql');
const { Store } = require('../model');

class App {
  constructor() {
    this.config = config;
    this.logger = null;
    this.loggerInitialize();
    this.store = new Store(this);
    this.store.insertMessagePartner({
      messagePartnerId: 'bot',
      firstName: 'John',
      lastName: 'Doe'
    });
    this.store.insertMessagePartner({
      messagePartnerId: '1',
      firstName: 'Sergey',
      lastName: 'Kalaus'
    });
  }

  loggerInitialize() {
    this.logger = createLogger({
      format: format.combine(
        format.splat(),
        format.colorize(),
        format.align(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf(info => `${info.timestamp} ${info.level}: ${info instanceof Error ? JSON.stringify(info.stack) : info.message}`),
      ),
      transports: [
        new transports.Console({
          level: this.config.get('logger.console.level'),
        }),
      ],
    });

    this.logger.info('Logger initialized');
  }

  async graphqlStart() {
    const port = this.config.get('graphql.port');
    this.iterators = {};
    this.pubsub = createPubSub.call(this);
    const contextData = {
      app: this,
    };
    const context = async ({ req, connection }) => {
      if (connection && connection.context) {
        Object.assign(contextData, connection.context);
      } else {
        const token = ((req && req.headers && req.headers.authorization && req.headers.authorization) || '').replace(/^Bearer /, '');
        Object.assign(contextData, await auth.bind(this)({ token }));
      }

      return contextData;
    };

    const schema = applyMiddleware(
      makeExecutableSchema({
        typeDefs,
        resolvers,
        resolverValidationOptions: {
          requireResolversForResolveType: false
        }
      }),
    );

    const server = new ApolloServer({
      schema,
      context,
      introspection: true,
      playground: {
        settings: {
          'request.credentials': 'include',
          'editor.reuseHeaders': false,
        },
        endpoint: `${this.config.get('url')}/graphql`,
        subscriptionsEndpoint: `${this.config.get('url').replace('http:', 'ws:')}/graphql`,
      },
      subscriptions: {
        path: '/graphql',
        onConnect: async (connectionParams) => {
          const token = (connectionParams.authorization || '').replace(/^Bearer /, '');
          return Object.assign(contextData, await auth.bind(this)({ token }));
        },
      },
      formatError: (err) => {
        this.logger.error('ApolloServer: %j', err);
        return err;
      },
    });

    const { url, subscriptionsUrl } = await server.listen({ port });
    this.logger.info(`httpservice/graphql is listenning on port: ${port}. GraphQL url: ${url}, Subscription: ${subscriptionsUrl}`);

    return {
      server,
    };
  }
}

module.exports = App;
