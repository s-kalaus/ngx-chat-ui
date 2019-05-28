import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-meta',
  templateUrl: './meta.component.html',
  styleUrls: ['./meta.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageMetaComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('messageMeta')
      .subscribe(template => this.template = template);
  }
}
