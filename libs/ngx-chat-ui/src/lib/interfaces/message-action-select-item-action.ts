import { INgxChatUiMessageActionSelectItemActionType } from './message-action-select-item-action-type';

export interface INgxChatUiMessageActionSelectItemAction {
  type: INgxChatUiMessageActionSelectItemActionType;
  value: string;
  meta: any;
}
