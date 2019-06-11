import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessagePartner, INgxChatUiState } from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageTypingComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  partner: INgxChatUiMessagePartner | null | true = null;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messageTyping', this.chatKey)
        .subscribe(template => this.template = template),
      this.ngxChatUiService
        .stateGet(this.chatKey)
        .subscribe(state => this.stateUpdated(state)),
    );
  }

  stateUpdated(state: INgxChatUiState) {
    this.partner = (
      state.isTyping
        && (this.ngxChatUiService
             .partnersGet(this.chatKey)
             .getValue()
             .find(messagePartner => messagePartner.messagePartnerId === state.isTyping) || !!state.isTyping)
    ) || null;
  }
}
