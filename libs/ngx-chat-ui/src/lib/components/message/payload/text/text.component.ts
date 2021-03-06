import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessage } from '../../../../interfaces';
import { BaseComponent } from '../../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-payload-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadTextComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messagePayloadText', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }
}
