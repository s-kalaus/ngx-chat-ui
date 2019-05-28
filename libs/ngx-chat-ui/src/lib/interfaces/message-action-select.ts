import { INgxChatUiMessageActionSelectItem } from './message-action-select-item';
import { INgxChatUiMessageActionBase } from './message-action-base';

export interface INgxChatUiMessageActionSelect extends INgxChatUiMessageActionBase {
  items: INgxChatUiMessageActionSelectItem[];
}
