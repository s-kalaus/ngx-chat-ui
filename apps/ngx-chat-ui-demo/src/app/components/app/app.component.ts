import { Component, OnInit } from '@angular/core';
import { INgxChatUiMessageType, NgxChatUiService } from '@ngx-chat-ui/libs/ngx-chat-ui';

@Component({
  selector: 'ngx-chat-ui-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.partnersSet([
      {
        id: '1',
        firstName: 'Sergey',
        lastName: 'Kalaus',
        direction: true
      },
      {
        id: '2',
        firstName: 'John',
        lastName: 'Doe',
        avatar: '//via.placeholder.com/50'
      }
    ]);
    setInterval(() => this.ngxChatUiService.messagesAdd(new Date().getTime() % 2 ? [
      {
        type: INgxChatUiMessageType.text,
        date: 'date-' + new Date().getTime(),
        partner: '1',
        payload: {
          text: 'text-' + new Date().getTime(),
        },
      }
    ] : [
      {
        type: INgxChatUiMessageType.select,
        date: 'date-' + new Date().getTime(),
        partner: '2',
        payload: {
          text: 'text-' + new Date().getTime(),
          items: [],
        },
      }
    ]), 2000);
  }
}
