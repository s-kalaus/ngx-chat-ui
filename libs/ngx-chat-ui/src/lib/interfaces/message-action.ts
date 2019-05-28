import { INgxChatUiMessageActionText } from './message-action-text';
import { INgxChatUiMessageActionSelect } from './message-action-select';
import { INgxChatUiMessageActionZipcode } from './message-action-zipcode';

export type INgxChatUiMessageAction = INgxChatUiMessageActionText
  | INgxChatUiMessageActionSelect
  | INgxChatUiMessageActionZipcode;
