import { INgxChatUiMessageActionText } from './message-action-text';
import { INgxChatUiMessageActionSelect } from './message-action-select';
import { INgxChatUiMessageActionAutocomplete } from './message-action-autocomplete';
import { INgxChatUiMessageActionUpload } from './message-action-upload';

export type INgxChatUiMessageAction = INgxChatUiMessageActionText
  | INgxChatUiMessageActionSelect
  | INgxChatUiMessageActionAutocomplete
  | INgxChatUiMessageActionUpload;
