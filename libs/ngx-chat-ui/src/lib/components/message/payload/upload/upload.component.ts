import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessage } from '../../../../interfaces';
import { BaseComponent } from '../../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-payload-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadUploadComponent extends BaseComponent {
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
        .templatesGet('messagePayloadUpload', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }
}
