const convict = require('convict');

const config = convict({
  env: {
    format: ['development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  logger: {
    console: {
      level: {
        format: ['info', 'error'],
        default: 'info',
      },
    },
  },
  rabbitmq: {
    port: {
      format: 'port',
      default: 5672,
    },
    host: {
      format: String,
      env: 'TOKDECK_RABBITMQ_HOST',
      default: 'localhost',
    },
  },
  graphql: {
    port: {
      format: 'port',
      default: 4000,
    },
  },
  url: {
    format: String,
    default: 'localhost',
  },
  token: {
    secret: {
      format: String,
      env: 'TOKDECK_TOKEN_SECRET',
      default: '',
    },
    ttl: {
      format: Number,
      default: 300,
    },
  },
});

const env = config.get('env');

config.loadFile(`${__dirname}/${env}.json`);
config.validate({ allowed: 'strict' });

module.exports = config;
