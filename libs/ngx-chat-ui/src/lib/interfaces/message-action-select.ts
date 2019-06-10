import { INgxChatUiMessageActionSelectItem } from './message-action-select-item';
import { INgxChatUiMessageActionBase } from './message-action-base';
import { INgxChatUiMessageType } from './message-type';

export interface INgxChatUiMessageActionSelect extends INgxChatUiMessageActionBase {
  type: INgxChatUiMessageType.select;
  items: INgxChatUiMessageActionSelectItem[];
}
