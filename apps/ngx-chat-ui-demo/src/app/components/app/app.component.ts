import { Component, OnInit } from '@angular/core';
import {
  INgxChatUiMessageType,
  INgxChatUiMessage,
  INgxChatUiMessagePayload, INgxChatUiMessagePartner, INgxChatUiState
} from '@ngx-chat-ui/libs/ngx-chat-ui';
import { ApiService, AuthService } from '../../services';

@Component({
  selector: 'ngx-chat-ui-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  partners: INgxChatUiMessagePartner[] = [];
  messages: INgxChatUiMessage[] = [];
  state: INgxChatUiState = {};

  conversationId: string;

  constructor(
    private authService: AuthService,
    private apiService: ApiService
  ) {
  }

  async ngOnInit() {
    await this.apiService.getProfile().toPromise();
    const { partners, conversationId, messages } = await this.apiService.getConversation('AddJob').toPromise();

    this.partners = this.partners.concat(partners);

    if (messages) {
      messages.forEach(message => this.addMessages(message));
    }

    this.apiService
      .subscribeConversation(conversationId)
      .subscribe(result => this.addMessages(result.data.messageAdded));

    this.apiService
      .subscribeConversationState(conversationId)
      .subscribe(result => this.state = result.data.conversationStateChanged);

    this.conversationId = conversationId;
  }

  addMessages(message: INgxChatUiMessage) {
    this.messages = this.messages.concat([{
      ...message,
      isIncoming: message.messagePartnerId !== this.authService.getUserId()
    }]);
  }

  async onResponse(payload: INgxChatUiMessagePayload) {
    await this.apiService.addMessage(this.conversationId, payload).toPromise();
  }
}
