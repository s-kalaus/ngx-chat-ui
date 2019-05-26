import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';

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
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('messageList')
      .subscribe(template => this.template = template);

    const subject = this.ngxChatUiService.messagesGet(this.chatKey);
    subject.subscribe(list => this.messages = list);
  }

  trackByFn(index) {
    return index;
  }
}
