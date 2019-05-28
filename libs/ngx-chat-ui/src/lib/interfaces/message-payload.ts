import { INgxChatUiMessagePayloadSelect } from './message-payload-select';
import { INgxChatUiMessagePayloadText } from './message-payload-text';
import { INgxChatUiMessagePayloadZipcode } from './message-payload-zipcode';

export type INgxChatUiMessagePayload = INgxChatUiMessagePayloadText
  | INgxChatUiMessagePayloadSelect
  | INgxChatUiMessagePayloadZipcode;
