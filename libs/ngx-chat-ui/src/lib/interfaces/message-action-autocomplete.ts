import { INgxChatUiMessageActionBase } from './message-action-base';
import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessageActionAutocomplete extends INgxChatUiMessageActionBase {
  type: INgxChatUiMessageType.autocomplete;
  callback: string;
}
