import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgxChatUiService } from '../../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageActionSelect,
  INgxChatUiMessageActionSelectItem, INgxChatUiMessageActionSelectItemActionRedirect,
  INgxChatUiMessageActionSelectItemActionType,
  INgxChatUiMessagePayloadSelect,
} from '../../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-payload-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadSelectComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;
  item: INgxChatUiMessageActionSelectItem;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messagePayloadSelect')
      .subscribe(template => this.template = template);
    this.initMessage();
  }

  initMessage() {
    const message = this.ngxChatUiService
      .messagesGet(this.chatKey)
      .getValue()
      .find(theMessage => theMessage.messageId === this.message.payload.messageId);
    this.item = (message.action as INgxChatUiMessageActionSelect).items[(this.message.payload as INgxChatUiMessagePayloadSelect).item];
    this.processItemAction();
  }

  processItemAction() {
    if (!this.item || !this.item.action) {
      return;
    }

    switch (this.item.action.type) {
      case INgxChatUiMessageActionSelectItemActionType.redirect:
        this.router.navigate([(this.item.action as INgxChatUiMessageActionSelectItemActionRedirect).url]);
        break;
    }
  }
}
