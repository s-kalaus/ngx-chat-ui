# ngx-chat-ui

[![travis ci](https://travis-ci.org/s-kalaus/ngx-chat-ui.svg?branch=master)](https://travis-ci.org/s-kalaus/ngx-chat-ui)

Universal Chat UI based on Angular. It Supports override of every template component via TemplateRef mechanism. Also ngx-chat-ui supports non-text responses (action payloads), for example, select one item from list or click buttons.

### Installation

    npm install --save ngx-chat-ui

## Usage


### AppModule

    import { NgxChatUiModule }  from 'ngx-chat-ui'
     
    @NgModule({
      ...
      imports: [
        NgxChatUiModule,
      ],
      ...
    })

#### Component (app.component.ts)

    import { Component, OnInit } from '@angular/core';
    import {
      INgxChatUiMessage,
      INgxChatUiMessageType,
      INgxChatUiMessagePayload,
      INgxChatUiMessagePartner,
      INgxChatUiState,
    } from 'ngx-chat-ui';

    @Component(
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss'],
    )
    export class AppComponent implements OnInit {
      state: INgxChatUiState;
      partners: INgxChatUiMessagePartner[] = [];
      messages: INgxChatUiMessage[] = [];

      ngOnInit() {
        this.partners = this.partners.concat([
          {
            messagePartnerId: 'me',
            firstName: 'Sergey',
            lastName: 'Kalaus'
          },
          {
            messagePartnerId: 'it',
            firstName: 'Someone'
          }
        ]);
    
        this.messages = this.messages.concat([
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
            payload: {
              type: INgxChatUiMessageType.text,
              text: 'Hi'
            },
            action: {
              type: INgxChatUiMessageType.text
            }
          }
        ]);
      }

      onResponse(payload: INgxChatUiMessagePayload) {
        // Here you post data to API and add message to chat afterwards
        setTimeout(() => {
          this.messages = this.messages.concat([
            {
              date: new Date(),
              messagePartnerId: 'me',
              payload
            }
          ]);
        });
      }
    }

#### Component (app.component.html)

    <ngx-chat-ui-container
      [state]="state"
      [partners]="partners"
      [messages]="messages"
      [containerTemplate]="containerTemplate"
      (response)="onResponse($event)"
    ></ngx-chat-ui-container>
    
    <ng-template
      #containerTemplate
      let-chatKey="chatKey"
      let-response="response"
    >
      <p>Custom template example</p>
      <ngx-chat-ui-message-list
        [chatKey]="chatKey"
      ></ngx-chat-ui-message-list>
      <ngx-chat-ui-action
        [chatKey]="chatKey"
        (response)="response.emit($event)"
      ></ngx-chat-ui-action>
    </ng-template>

#### Component (app.component.scss)
    @import '~ngx-chat-ui/src/themes/default/styles';

### Demo
[Link](https://s-kalaus.github.io/ngx-chat-ui/dist/apps/ngx-chat-ui-demo/)

### Full list of templates
[Link](https://github.com/s-kalaus/ngx-chat-ui/blob/master/libs/ngx-chat-ui/src/lib/components/container/container.component.html)
