import { INgxChatUiMessagePayload } from './message-payload';

export interface INgxChatUiResponse {
  chatKey: string;
  payload: INgxChatUiMessagePayload;
}
