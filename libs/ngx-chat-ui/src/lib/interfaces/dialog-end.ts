import { INgxChatUiMessagePayload } from './message-payload';

export interface INgxChatUiDialogEnd {
  chatKey: string;
  payload: INgxChatUiMessagePayload;
}
