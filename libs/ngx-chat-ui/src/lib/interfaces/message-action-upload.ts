import { INgxChatUiMessageActionBase } from './message-action-base';
import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessageActionUpload extends INgxChatUiMessageActionBase {
  type: INgxChatUiMessageType.upload;
  callback: string;
}
