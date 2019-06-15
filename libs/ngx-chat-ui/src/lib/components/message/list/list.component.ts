import { Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage
} from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageListComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  messages: any[] = [];

  constructor(
    private element: ElementRef,
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messageList', this.chatKey)
        .subscribe(template => this.template = template),
      this.ngxChatUiService
        .messagesGet(this.chatKey)
        .subscribe(messages => this.onMessageChanged(messages)),
      this.ngxChatUiService
        .stateGet(this.chatKey)
        .subscribe(() => this.scrollBottom()),
    );
  }

  trackByFn(index) {
    return index;
  }

  onMessageChanged(messages: INgxChatUiMessage[]) {
    this.messages = messages;
    setTimeout(() => this.scrollBottom());
  }

  scrollBottom() {
    const el = this.element.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}
