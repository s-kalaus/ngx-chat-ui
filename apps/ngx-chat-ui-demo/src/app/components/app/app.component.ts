import { Component, OnInit } from '@angular/core';
import {
  INgxChatUiMessageType,
  INgxChatUiMessage,
  NgxChatUiService, INgxChatUiMessagePayload
} from '@ngx-chat-ui/libs/ngx-chat-ui';

@Component({
  selector: 'ngx-chat-ui-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dialog: any[] = [
    {
      id: 'start',
      messages: [
        {
          partner: '2',
          isIncoming: true,
          payload: {
            type: INgxChatUiMessageType.text,
            text: 'Hey, 👋'
          },
        },
        {
          partner: '2',
          isIncoming: true,
          id: '1',
          action: {
            type: INgxChatUiMessageType.select,
            items: [
              {
                id: 0,
                icon: '👌',
                className: 'cta'
              },
              {
                id: 1,
                text: 'Nope...'
              },
            ],
          },
          payload: {
            type: INgxChatUiMessageType.text,
            text: 'Do you have a work to do?'
          },
        },
      ],
    },
    {
      id: 'zipcode',
      messages: [
        {
          partner: '2',
          isIncoming: true,
          id: '2',
          action: {
            type: INgxChatUiMessageType.zipcode,
          },
          payload: {
            type: INgxChatUiMessageType.text,
            text: 'Where do you live?',
          },
        },
      ],
    },
    {
      id: 'talk',
      messages: [
        {
          partner: '2',
          isIncoming: true,
          id: '2',
          action: {
            type: INgxChatUiMessageType.text,
          },
          payload: {
            type: INgxChatUiMessageType.text,
            text: 'Lets just talk!',
          },
        },
      ],
    },
    {
      id: 'finish',
      messages: [
        {
          partner: '2',
          isIncoming: true,
          id: '2',
          payload: {
            type: INgxChatUiMessageType.text,
            text: 'Bye',
          },
        },
      ],
    },
  ];

  dialogCursor = 0;

  dialogResult: { [key: string]: any } = {};

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.partnersSet([
      {
        id: '1',
        firstName: 'Sergey',
        lastName: 'Kalaus'
      },
      {
        id: '2',
        firstName: 'John',
        lastName: 'Doe',
        avatar: '//via.placeholder.com/50'
      }
    ]);
    this.dialogNext();
  }

  dialogNext() {
    this.ngxChatUiService.stateSet({ isTyping: '2' });
    setTimeout(() => {
      const phrase = this.dialog[this.dialogCursor];
      phrase.messages.reduce((previousPromise, message) =>
        previousPromise.then(() => new Promise(resolve => this.sendMessage(message, () => resolve()))),
        Promise.resolve(),
      );
    }, 1000);
  }

  sendMessage(message: INgxChatUiMessage, callback) {
    this.ngxChatUiService.stateSet({ isTyping: '2' });
    setTimeout(() => {
      this.ngxChatUiService.messagesAdd( [message]);
      callback();
    }, 1000);
  }

  onResponse(payload: INgxChatUiMessagePayload) {
    const phrase = this.dialog[this.dialogCursor];
    setTimeout(() => {
      this.dialogResult[phrase.id] = payload;
      this.ngxChatUiService.messagesAdd([
        {
          date: 'date-' + new Date().getTime(),
          partner: '1',
          payload,
        }
      ]);
      if (this.dialog.length - 1 > this.dialogCursor) {
        this.dialogCursor += 1;
        setTimeout(() => this.dialogNext(), 500);
      }
    });
  }
}
