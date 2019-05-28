import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage, INgxChatUiMessagePayload, INgxChatUiMessageType } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-action-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionSelectComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;
  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('actionSelect')
      .subscribe(template => this.template = template);
  }

  submit() {
    this.response.emit({
      type: INgxChatUiMessageType.select,
      item: 0,
      messageId: this.message.id,
    });
  }
}
