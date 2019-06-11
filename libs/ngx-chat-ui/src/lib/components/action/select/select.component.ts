import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItem,
  INgxChatUiMessageType
} from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-action-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionSelectComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    public ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService.templatesGet('actionSelect', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }

  submit(item: INgxChatUiMessageActionSelectItem) {
    (this as any).response.emit({
      chatKey: this.chatKey,
      payload: {
        type: INgxChatUiMessageType.select,
        value: item.id,
        messageId: this.message.messageId,
      },
    });
  }
}
