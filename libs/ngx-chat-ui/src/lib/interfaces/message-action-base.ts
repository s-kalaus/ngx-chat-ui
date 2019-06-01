import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessageActionBase {
  type: INgxChatUiMessageType;
  className?: string;
  meta?: any;
}
