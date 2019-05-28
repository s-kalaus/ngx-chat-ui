import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageAction,
  INgxChatUiMessagePayload,
  INgxChatUiMessageType
} from '../../interfaces';

@Component({
  selector: 'ngx-chat-ui-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  isSending = false;
  message: INgxChatUiMessage = null;

  MessageType = INgxChatUiMessageType;

  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('action')
      .subscribe(template => this.template = template);

    const subjectMessage = this.ngxChatUiService.actionGet(this.chatKey);
    subjectMessage.subscribe(message => this.message = message);

    const subjectState = this.ngxChatUiService.stateGet(this.chatKey);
    subjectState.subscribe(state => this.isSending = state.isSending);
  }
}
