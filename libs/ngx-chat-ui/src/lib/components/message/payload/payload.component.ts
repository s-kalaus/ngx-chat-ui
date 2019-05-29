import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage, INgxChatUiMessageType } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-payload',
  templateUrl: './payload.component.html',
  styleUrls: ['./payload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  MessageType = INgxChatUiMessageType;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messagePayload')
      .subscribe(template => {this.template = template});
  }
}
