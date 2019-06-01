const { topics, timeout, messageTypes, messagePayloadActions } = require('../lib/graphql');
const dialogs = require('../dialog');
const { v4 } = require('uuid');

class Conversation {
  constructor(app, data = {}) {
    this.app = app;
    Object.assign(this, data);
    this.messages = [];
    this.dialogCursor = this.dialogCursor === undefined ? -1 : this.dialogCursor;
    this.dialogFlow = this.dialogFlow || 'main';
    if (!this.conversationId) {
      this.conversationId = v4();
    }
  }

  async dialogNext() {
    this.dialogCursor += 1;
    const phrase = dialogs[this.conversationType].flow[this.dialogFlow][this.dialogCursor];
    if (!phrase) {
      return;
    }
    await timeout(1000);
    for (let data of phrase.messages) {
      this.setTyping(data.messagePartnerId);
      const message = await this.addMessage(data);
      await this.sendMessage(message.messageId, 1000);
    }
  }

  async addMessage(data) {
    const message = this.app.store.insertMessage(data);
    this.messages.push(message.messageId);
    return message;
  }

  getMessages() {
    return this.messages.map(messageId  => this.app.store.getMessage(messageId));
  }

  setTyping(isTyping) {
    this.partners.forEach(userId =>
      this.app.pubsub.publish(topics.conversationStateChanged, { conversationStateChanged: {
        isTyping,
        conversationId: this.conversationId,
        userId,
      } })
    );
  }

  async sendMessage(messageId, delay = 0) {
    if (delay > 0) {
      await timeout(delay);
    }
    const message = this.app.store.getMessage(messageId);
    if (!message) {
      return;
    }
    this.partners.forEach(userId => {
      this.app.pubsub.publish(topics.messageAdded, { messageAdded: {
        messageId: message.messageId,
        messagePartnerId: message.messagePartnerId,
        payload: message.payload,
        action: message.action,
        conversationId: this.conversationId,
        userId,
      } });
    });
  }

  checkPayloadAction(conversation, message) {
    if (message.payload.type !== messageTypes.select) {
      return false;
    }
    const messagePrev = this.app.store.getMessage(message.payload.messageId);
    const item = messagePrev.action.items[message.payload.item];
    if (!item.action) {
      return false;
    }
    switch (item.action.type) {
      case messagePayloadActions.changeFlow:
        conversation.dialogFlow = item.action.flow;
        conversation.dialogCursor = -1;
        break;
    }
    return false;
  }
}

module.exports = {
  Conversation,
};
