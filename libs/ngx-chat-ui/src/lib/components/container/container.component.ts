import { Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';

@Component({
  selector: 'ngx-chat-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiContainerComponent implements OnInit {
  @ViewChild('ngxChatUiContainerTemplateDefault') ngxChatUiContainerTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageListTemplateDefault') ngxChatUiMessageListTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageItemTemplateDefault') ngxChatUiMessageItemTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePartnerTemplateDefault') ngxChatUiMessagePartnerTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageTextTemplateDefault') ngxChatUiMessageTextTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageMetaTemplateDefault') ngxChatUiMessageMetaTemplateDefault: TemplateRef<any>;
  @Input() ngxChatUiContainerTemplate: TemplateRef<any>;
  @Input() ngxChatUiMessageListTemplate: TemplateRef<any>;
  @Input() ngxChatUiMessageItemTemplate: TemplateRef<any>;
  @Input() ngxChatUiMessagePartnerTemplate: TemplateRef<any>;
  @Input() ngxChatUiMessageTextTemplate: TemplateRef<any>;
  @Input() ngxChatUiMessageMetaTemplate: TemplateRef<any>;
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() messages: any[];

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesSet({
      container: this.ngxChatUiContainerTemplate || this.ngxChatUiContainerTemplateDefault,
      messageList: this.ngxChatUiMessageListTemplate || this.ngxChatUiMessageListTemplateDefault,
      messageItem: this.ngxChatUiMessageItemTemplate || this.ngxChatUiMessageItemTemplateDefault,
      messagePartner: this.ngxChatUiMessagePartnerTemplate || this.ngxChatUiMessagePartnerTemplateDefault,
      messageText: this.ngxChatUiMessageTextTemplateDefault || this.ngxChatUiMessageTextTemplateDefault,
      messageMeta: this.ngxChatUiMessageMetaTemplateDefault || this.ngxChatUiMessageMetaTemplateDefault,
    });
    this.ngxChatUiService.templatesGet('container')
      .subscribe(template => this.template = template);
  }
}
