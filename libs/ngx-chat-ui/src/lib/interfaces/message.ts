import { INgxChatUiMessagePartner } from './message-partner';
import { INgxChatUiMessageAction } from './message-action';
import { INgxChatUiMessagePayload } from './message-payload';

export interface INgxChatUiMessage {
  messageId?: string;
  date?: string;
  isIncoming?: boolean;
  messagePartnerId?: string;
  partner?: INgxChatUiMessagePartner;
  action?: INgxChatUiMessageAction;
  payload: INgxChatUiMessagePayload;
  meta?: any;
}
