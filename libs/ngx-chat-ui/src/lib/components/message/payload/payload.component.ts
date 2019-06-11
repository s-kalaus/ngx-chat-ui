import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage, INgxChatUiMessageType } from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadComponent extends BaseComponent {
  @Input() chatKey = 'default';
  @Input() message: INgxChatUiMessage;

  template: TemplateRef<any>;
  MessageType = INgxChatUiMessageType;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messagePayload', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }
}
