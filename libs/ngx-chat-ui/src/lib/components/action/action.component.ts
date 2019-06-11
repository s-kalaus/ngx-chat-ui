import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageType
} from '../../interfaces';
import { BaseComponent } from '../../classes';

@Component({
  selector: 'ngx-chat-ui-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  isSending = false;
  message: INgxChatUiMessage = null;

  MessageType = INgxChatUiMessageType;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('action', this.chatKey)
        .subscribe(template => this.template = template),
      this.ngxChatUiService
        .actionGet(this.chatKey)
        .subscribe(message => this.message = message),
      this.ngxChatUiService
        .stateGet(this.chatKey)
        .subscribe(state => this.isSending = state.isSending),
    );
  }
}
