const messageAdd = async (_, { conversationId, payload }, { app, userId }) => {
  const { messageId } = app.store.addMessage({
    userId,
    conversationId,
    payload
  });
  return { messageId };
};

module.exports = messageAdd;
