const { AmqpPubSub } = require('graphql-rabbitmq-subscriptions');
const { ConsoleLogger } = require('@cdm-logger/server');
const { verify } = require('jsonwebtoken');
const { ApolloError } = require('apollo-server');

const topics = {
  messageAdded: 'messageAdded',
  conversationStateChanged: 'conversationStateChanged'
};

const messageTypes = {
  text: 0,
  select: 1,
  zipcode: 2
};

const messagePayloadActions = {
  changeFlow: 0
};

function createPubSub() {
  const config = this.config.get('rabbitmq');
  return new AmqpPubSub({
    config,
    logger: ConsoleLogger.create('tokdeck', {
      level: 'debug',
      mode: 'short',
    }),
  });
}

async function auth({ token }) {
  if (!token) {
    return {};
  }

  const result = verify(token, this.config.get('token.secret'));

  if (!result.userId) {
    throw new ApolloError('Auth Error', 403);
  }

  const { userId } = result;

  return { userId };
}

function timeout(delay = 0) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

module.exports = {
  createPubSub,
  auth,
  topics,
  messageTypes,
  messagePayloadActions,
  timeout,
};
