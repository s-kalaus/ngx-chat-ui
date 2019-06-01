const conversationMessagesGetAll = async ({ conversationId }, __, { app }) => {
  return app.store
    .getConversation(conversationId)
    .getMessages();
};

module.exports = conversationMessagesGetAll;
