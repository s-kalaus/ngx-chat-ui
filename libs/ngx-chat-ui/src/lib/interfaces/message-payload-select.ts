import { INgxChatUiMessagePayloadText } from './message-payload-text';

export interface INgxChatUiMessagePayloadSelect extends INgxChatUiMessagePayloadText {
  items?: any[];
}
