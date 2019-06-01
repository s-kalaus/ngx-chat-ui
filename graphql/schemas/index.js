const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    token: String!
    conversation(conversationType: String!): Conversation!
  }
  
  type Mutation {
    messageAdd(conversationId: ID!, payload: MessagePayloadInput): Message!
  }

  type Subscription {
    messageAdded(conversationId: ID!): Message!
    conversationStateChanged(conversationId: ID!): ConversationState!
  }

  type Conversation {
    conversationId: ID
    partners: [MessagePartner]
    messages: [Message]
  }
  
  type ConversationState {
    isTyping: String
  }

  type Message {
    messageId: ID
    messagePartnerId: ID
    payload: MessagePayload
    action: MessageAction
  }

  type MessagePartner {
    messagePartnerId: ID
    firstName: String
    lastName: String
  }
  
  type MessagePayload {
    type: Int
    text: String
    item: Int
    zipcode: String
    messageId: ID
  }
  
  type MessageAction {
    type: Int
    className: String
    items: [MessageActionSelectItem]
  }
  
  type MessageActionSelectItem {
    id: Int
    icon: String
    text: String
    className: String
  }
  
  input MessagePayloadInput {
    type: Int
    text: String
    item: Int
    zipcode: String
    messageId: ID
  }
`;

module.exports = typeDefs;
