const { withFilter } = require('apollo-server');
const { topics } = require('../lib/graphql');

const subscriptionConversationStateChanged = {
  subscribe: withFilter(
    (_, __, { app }) => app.pubsub.asyncIterator(topics.conversationStateChanged),
    ({ conversationStateChanged }, { conversationId }, { userId }) => {
      return conversationStateChanged.conversationId === conversationId
        && conversationStateChanged.userId === userId;
    },
  ),
};

module.exports = subscriptionConversationStateChanged;
