import { INgxChatUiMessagePayloadSelect } from './message-payload-select';
import { INgxChatUiMessagePayloadText } from './message-payload-text';

export type INgxChatUiMessagePayload = INgxChatUiMessagePayloadText
  | INgxChatUiMessagePayloadSelect;
