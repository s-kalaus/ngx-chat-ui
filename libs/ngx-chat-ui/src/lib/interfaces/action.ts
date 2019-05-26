import { INgxChatUiMessageType } from './message-type';
import { INgxChatUiMessagePayload } from './message-payload';

export interface INgxChatUiAction {
  type: INgxChatUiMessageType;
  payload: INgxChatUiMessagePayload;
}
