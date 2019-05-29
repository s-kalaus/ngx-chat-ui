import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePartnerComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messagePartner')
      .subscribe(template => this.template = template);
  }
}
