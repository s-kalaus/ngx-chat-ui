import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessagePayload {
  type: INgxChatUiMessageType;
  messageId?: string;
  value: any;
}
