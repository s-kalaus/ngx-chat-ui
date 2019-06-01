const conversationGetOne = async (_, { conversationType }, { app, userId }) => {
  const { conversationId } = app.store.startConversation({
    userId,
    conversationType,
  });
  return { conversationId };
};

module.exports = conversationGetOne;
