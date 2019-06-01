const conversationPartnersGetAll = async ({ conversationId }, __, { app }) => {
  return app.store
    .getConversation(conversationId)
    .partners
    .map(partnerId => app.store.getMessagePartner(partnerId));
};

module.exports = conversationPartnersGetAll;
