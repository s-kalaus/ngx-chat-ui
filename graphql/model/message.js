const { v4 } = require('uuid');

class Message {
  constructor(app, data = {}) {
    this.app = app;
    Object.assign(this, data);
    if (!this.messageId) {
      this.messageId = v4();
    }
  }
}

module.exports = {
  Message,
};
