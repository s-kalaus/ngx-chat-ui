import { Component, OnInit } from '@angular/core';
import {
  INgxChatUiMessage,
  INgxChatUiMessageType,
  INgxChatUiMessagePayload,
  INgxChatUiMessagePartner,
  INgxChatUiState
} from '@ngx-chat-ui/libs/ngx-chat-ui';

@Component({
  selector: 'ngx-chat-ui-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  partners: INgxChatUiMessagePartner[] = [];
  messages: {
    [chatKey: string]: INgxChatUiMessage[]
  } = {
    first: [],
    second: [],
    third: []
  };
  state: {
    [chatKey: string]: INgxChatUiState
  } = {
    first: {},
    second: {},
    third: {}
  };

  ngOnInit() {
    this.partners = this.partners.concat([
      {
        messagePartnerId: 'me',
        firstName: 'Sergey',
        lastName: 'Kalaus'
      },
      {
        messagePartnerId: 'it',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMS42AP/bAEMABQQEBAQDBQQEBAYFBQYIDQgIBwcIEAsMCQ0TEBQTEhASEhQXHRkUFhwWEhIaIxocHh8hISEUGSQnJCAmHSAhIP/bAEMBBQYGCAcIDwgIDyAVEhUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/AABEIABgAGAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsW7uoLGzlu7l9kUS7mP+e9YH/CbaH9hW43y+aW2m2Cgyr7kZxjHOc/rxVXx88kej2hVm8t7gRuqgnPyswJ5xgFR2P4V5nFb3yyBZL7fEgXafLAd8DneenPXgD8K8HH5jPD1fZwS26nqYXBxqw55dz3mORJYkljYMjgMrDoQehorjvh7eXkujXFjeytK9rIAjnuhHA644wRgAcAcUV7FCqq1NVI9Tz6kHTm4PodVe2NrqFqba8iEkZ5weoPqPQ1zf8Awgun+du+13Hl/wB3jP54/pRRUVcLRrNOpG7Kp16lNWg7HSWVja6darbWkQjjHPuT6k96KKK3jFRXLFWRk227s//Z'
      }
    ]);

    this.messages.first = this.messages.first.concat([
      {
        date: new Date(),
        messagePartnerId: 'me',
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Hello'
        }
      },
      {
        date: new Date(),
        messageId: '1',
        messagePartnerId: 'it',
        isIncoming: true,
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Wanna play?'
        },
        action: {
          type: INgxChatUiMessageType.select,
          items: [
            {
              icon: '👌',
              id: 0,
              className: 'ngx-chat-ui-action-select-item-cta'
            },
            {
              text: 'No',
              id: 1
            }
          ]
        }
      },
    ]);

    this.messages.second = this.messages.second.concat([
      {
        date: new Date(),
        messagePartnerId: 'me',
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Hello'
        }
      },
      {
        date: new Date(),
        messageId: '2',
        messagePartnerId: 'it',
        isIncoming: true,
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Wanna play?'
        },
        action: {
          type: INgxChatUiMessageType.text
        }
      },
    ]);

    this.messages.third = this.messages.third.concat([
      {
        date: new Date(),
        messagePartnerId: 'me',
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Hello'
        }
      },
      {
        date: new Date(),
        messageId: '1',
        messagePartnerId: 'it',
        isIncoming: true,
        payload: {
          type: INgxChatUiMessageType.text,
          text: 'Wanna play?'
        },
        action: {
          type: INgxChatUiMessageType.select,
          className: 'ngx-chat-ui-action-select-list',
          items: [
            {
              text: 'Yes',
              id: 0,
              className: 'ngx-chat-ui-action-select-item-cta'
            },
            {
              text: 'No',
              id: 1
            }
          ]
        }
      },
    ]);
  }

  onResponse(chatKey: string, payload: INgxChatUiMessagePayload) {
    setTimeout(() => {
      this.messages[chatKey] = this.messages[chatKey].concat([
        {
          date: new Date(),
          messagePartnerId: 'me',
          payload
        }
      ]);
    });
  }
}
