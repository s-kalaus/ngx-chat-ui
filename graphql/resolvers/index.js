const tokenGetOne = require('./token-get-one');
const conversationGetOne = require('./conversation-get-one');
const conversationPartnersGetAll = require('./conversation-partners-get-all');
const conversationMessagesGetAll = require('./conversation-messages-get-all');
const subscriptionMessageAdded = require('./subscription-message-added');
const subscriptionConversationStateChanged = require('./subscription-conversation-state-changed');
const messageAdd = require('./message-add');

module.exports = {
  Query: {
    token: tokenGetOne,
    conversation: conversationGetOne,
  },
  Mutation: {
    messageAdd,
  },
  Conversation: {
    partners: conversationPartnersGetAll,
    messages: conversationMessagesGetAll,
  },
  Subscription: {
    messageAdded: subscriptionMessageAdded,
    conversationStateChanged: subscriptionConversationStateChanged,
  }
};
