import { INgxChatUiMessageActionBase } from './message-action-base';
import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessageActionText extends INgxChatUiMessageActionBase {
  type: INgxChatUiMessageType.text;
}
