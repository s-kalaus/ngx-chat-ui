import { INgxChatUiMessageActionSelectItemAction } from './message-action-select-item-action';

export interface INgxChatUiMessageActionSelectItem {
  id: number;
  icon?: string;
  text?: string;
  className?: string;
  action?: INgxChatUiMessageActionSelectItemAction;
}
