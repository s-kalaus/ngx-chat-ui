import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessagePayloadBase {
  type: INgxChatUiMessageType;
  messageId?: string;
}
