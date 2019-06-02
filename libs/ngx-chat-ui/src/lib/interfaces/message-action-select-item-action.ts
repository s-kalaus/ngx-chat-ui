import { INgxChatUiMessageActionSelectItemActionFlow } from './message-action-select-item-action-flow';
import { INgxChatUiMessageActionSelectItemActionRedirect } from './message-action-select-item-action-redirect';

export type INgxChatUiMessageActionSelectItemAction = INgxChatUiMessageActionSelectItemActionFlow
  | INgxChatUiMessageActionSelectItemActionRedirect;
