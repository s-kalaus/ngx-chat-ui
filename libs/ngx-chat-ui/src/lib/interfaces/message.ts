import { INgxChatUiMessagePartner } from './message-partner';
import { INgxChatUiAction } from './action';

export interface INgxChatUiMessage extends INgxChatUiAction {
  date: string;
  partner: string | INgxChatUiMessagePartner;
}
