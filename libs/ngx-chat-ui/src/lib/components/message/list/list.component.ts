import { Component, ElementRef, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '@ngx-chat-ui-lib/services/chat.service';
import {
  INgxChatUiMessage
} from '@ngx-chat-ui-lib/interfaces';

@Component({
  selector: 'ngx-chat-ui-message-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageListComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  messages: any[] = [];

  constructor(
    private element: ElementRef,
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messageList')
      .subscribe(template => this.template = template);

    this.ngxChatUiService
      .messagesGet(this.chatKey)
      .subscribe(messages => this.onMessageChanged(messages));
  }

  trackByFn(index) {
    return index;
  }

  onMessageChanged(messages: INgxChatUiMessage[]) {
    this.messages = messages;
    const el = this.element.nativeElement;
    el.scrollTop = el.scrollHeight;
  }
}
