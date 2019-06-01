const { withFilter } = require('apollo-server');
const { topics } = require('../lib/graphql');

const subscriptionMessageAdded = {
  subscribe: withFilter(
    (_, __, { app }) => app.pubsub.asyncIterator(topics.messageAdded),
    ({ messageAdded }, { conversationId }, { userId }) => {
      return messageAdded.conversationId === conversationId
        && messageAdded.userId === userId;
    },
  ),
};

module.exports = subscriptionMessageAdded;
