const { MessagePartner } = require('./message-partner');
const { Conversation } = require('./conversation');
const { Message } = require('./message');
const dialogs = require('../dialog');

class Store {
  constructor(app) {
    this.app = app;
    this.messagePartnersById = {};
    this.messagesById = {};
    this.conversationsById = {};
  }

  insertMessagePartner(data) {
    const messagePartner = new MessagePartner(this.app, data);
    this.messagePartnersById[messagePartner.messagePartnerId] = messagePartner;
    return messagePartner;
  }

  getMessagePartner(partnerId) {
    return this.messagePartnersById[partnerId];
  }

  startConversation({
    userId,
    conversationType,
  }) {
    const conversationExisting = this.getExistingConversation({
      userId,
      conversationType,
    });
    if (conversationExisting) {
      return conversationExisting;
    }
    const partners = [userId];
    if (dialogs[conversationType]) {
      partners.push.apply(partners, dialogs[conversationType].partners);
    }
    const conversation = new Conversation(this.app, {
      conversationType,
      partners,
      userId,
    });
    this.conversationsById[conversation.conversationId] = conversation;
    if (dialogs[conversationType]) {
      conversation.dialogNext();
    }
    return conversation;
  }

  getConversation(conversationId) {
    return this.conversationsById[conversationId];
  }

  getExistingConversation({
    userId,
    conversationType,
  }) {
    const conversationId = Object.keys(this.conversationsById).find(conversationId => {
      const conversation = this.getConversation(conversationId);
      return conversation.userId === userId
        && conversation.conversationType === conversationType;
    });
    if (conversationId) {
      return this.getConversation(conversationId);
    }
    return null;
  }

  insertMessage(data) {
    const message = new Message(this.app, data);
    this.messagesById[message.messageId] = message;
    return message;
  }

  async addMessage({
    userId,
    conversationId,
    payload
  }) {
    const conversation = this.getConversation(conversationId);
    const message = await conversation.addMessage({ payload, messagePartnerId: userId });
    conversation.sendMessage(message.messageId);
    if (!conversation.checkPayloadAction(conversation, message)) {
      conversation.dialogNext();
    }
    return message;
  }

  getMessage(messageId) {
    return this.messagesById[messageId];
  }
}

module.exports = {
  Store,
};
