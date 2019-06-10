import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItem,
  INgxChatUiMessageType
} from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-action-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionSelectComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    public ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('actionSelect')
      .subscribe(template => this.template = template);
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
