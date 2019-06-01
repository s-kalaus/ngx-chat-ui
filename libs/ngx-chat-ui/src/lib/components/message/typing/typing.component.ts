import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '@ngx-chat-ui-lib/services/chat.service';
import { INgxChatUiMessagePartner, INgxChatUiState } from '@ngx-chat-ui-lib/interfaces';

@Component({
  selector: 'ngx-chat-ui-message-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageTypingComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  partner: INgxChatUiMessagePartner | null | true = null;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messageTyping')
      .subscribe(template => this.template = template);

    this.ngxChatUiService
      .stateGet(this.chatKey)
      .subscribe(state => this.stateUpdated(state));
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
