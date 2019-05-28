import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessagePartner, INgxChatUiState } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-typing',
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageTypingComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  partner: INgxChatUiMessagePartner | null = null;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('messageTyping')
      .subscribe(template => this.template = template);

    const subject = this.ngxChatUiService.stateGet(this.chatKey);
    subject.subscribe(state => this.stateUpdated(state));
  }

  stateUpdated(state: INgxChatUiState) {
    this.partner = (
      state.isTyping
        && this.ngxChatUiService
             .partnersGet(this.chatKey)
             .getValue()
             .find(partner => partner.id === state.isTyping)
    ) || null;
  }
}
