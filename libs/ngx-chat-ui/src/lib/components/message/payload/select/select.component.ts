import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItem,
} from '../../../../interfaces';
import { BaseComponent } from '../../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-payload-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadSelectComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;
  item: INgxChatUiMessageActionSelectItem;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messagePayloadSelect', this.chatKey)
        .subscribe(template => this.template = template),
    );
    this.initMessage();
  }

  initMessage() {
    this.item = this.ngxChatUiService
      .getItemForItemAction(this.message, this.chatKey);
  }
}
