import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage } from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePartnerComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  avatar: string;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messagePartner', this.chatKey)
        .subscribe(template => this.template = template),
    );
    this.updateAvatar();
  }

  updateAvatar() {
    const avatar = [];
    if (this.message.partner) {
      if (this.message.partner.firstName) {
        avatar.push(this.message.partner.firstName.slice(0, 1));
      }
      if (this.message.partner.lastName) {
        avatar.push(this.message.partner.lastName.slice(0, 1));
      }
    }
    this.avatar = avatar.join('');
  }
}
