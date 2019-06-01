const { v4 } = require('uuid');

class MessagePartner {
  constructor(app, data = {}) {
    this.app = app;
    Object.assign(this, data);
    if (!this.messagePartnerId) {
      this.messagePartnerId = v4();
    }
  }
}

module.exports = {
  MessagePartner,
};
