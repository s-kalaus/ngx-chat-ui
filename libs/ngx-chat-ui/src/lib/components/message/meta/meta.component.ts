import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage } from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageMetaComponent extends BaseComponent {
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
        .templatesGet('messageMeta', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }
}
