import { INgxChatUiMessagePartner } from './message-partner';
import { INgxChatUiMessageAction } from './message-action';
import { INgxChatUiMessagePayload } from './message-payload';

export interface INgxChatUiMessage {
  id?: string;
  date: string;
  isIncoming?: boolean;
  partner: string | INgxChatUiMessagePartner;
  action?: INgxChatUiMessageAction;
  payload: INgxChatUiMessagePayload;
}
