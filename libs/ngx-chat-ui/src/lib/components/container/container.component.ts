import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';
import { INgxChatUiMessagePayload } from '../../interfaces';

@Component({
  selector: 'ngx-chat-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiContainerComponent implements OnInit {
  @ViewChild('ngxChatUiContainerTemplateDefault') ngxChatUiContainerTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageTypingTemplateDefault') ngxChatUiMessageTypingTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageListTemplateDefault') ngxChatUiMessageListTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageItemTemplateDefault') ngxChatUiMessageItemTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePartnerTemplateDefault') ngxChatUiMessagePartnerTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePayloadTemplateDefault') ngxChatUiMessagePayloadTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePayloadTextTemplateDefault') ngxChatUiMessagePayloadTextTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePayloadSelectTemplateDefault') ngxChatUiMessagePayloadSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessagePayloadZipcodeTemplateDefault') ngxChatUiMessagePayloadZipcodeTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiMessageMetaTemplateDefault') ngxChatUiMessageMetaTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiActionTemplateDefault') ngxChatUiActionTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiActionTextTemplateDefault') ngxChatUiActionTextTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiActionSelectTemplateDefault') ngxChatUiActionSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiActionSelectItemTemplateDefault') ngxChatUiActionSelectItemTemplateDefault: TemplateRef<any>;
  @ViewChild('ngxChatUiActionZipcodeTemplateDefault') ngxChatUiActionZipcodeTemplateDefault: TemplateRef<any>;
  @Input() containerTemplate: TemplateRef<any>;
  @Input() messageTypingTemplate: TemplateRef<any>;
  @Input() messageListTemplate: TemplateRef<any>;
  @Input() messageItemTemplate: TemplateRef<any>;
  @Input() messagePartnerTemplate: TemplateRef<any>;
  @Input() messagePayloadTemplate: TemplateRef<any>;
  @Input() messagePayloadTextTemplate: TemplateRef<any>;
  @Input() messagePayloadSelectTemplate: TemplateRef<any>;
  @Input() messagePayloadZipcodeTemplate: TemplateRef<any>;
  @Input() messageMetaTemplate: TemplateRef<any>;
  @Input() actionTemplate: TemplateRef<any>;
  @Input() actionTextTemplate: TemplateRef<any>;
  @Input() actionSelectTemplate: TemplateRef<any>;
  @Input() actionSelectItemTemplate: TemplateRef<any>;
  @Input() actionZipcodeTemplate: TemplateRef<any>;
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() messages: any[];
  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesSet({
      container: this.containerTemplate || this.ngxChatUiContainerTemplateDefault,
      messageTyping: this.messageTypingTemplate || this.ngxChatUiMessageTypingTemplateDefault,
      messageList: this.messageListTemplate || this.ngxChatUiMessageListTemplateDefault,
      messageItem: this.messageItemTemplate || this.ngxChatUiMessageItemTemplateDefault,
      messagePartner: this.messagePartnerTemplate || this.ngxChatUiMessagePartnerTemplateDefault,
      messagePayload: this.messagePayloadTemplate || this.ngxChatUiMessagePayloadTemplateDefault,
      messagePayloadText: this.messagePayloadTextTemplate || this.ngxChatUiMessagePayloadTextTemplateDefault,
      messagePayloadSelect: this.messagePayloadSelectTemplate || this.ngxChatUiMessagePayloadSelectTemplateDefault,
      messagePayloadZipcode: this.messagePayloadZipcodeTemplate || this.ngxChatUiMessagePayloadZipcodeTemplateDefault,
      messageMeta: this.messageMetaTemplate || this.ngxChatUiMessageMetaTemplateDefault,
      action: this.actionTemplate || this.ngxChatUiActionTemplateDefault,
      actionText: this.actionTextTemplate || this.ngxChatUiActionTextTemplateDefault,
      actionSelect: this.actionSelectTemplate || this.ngxChatUiActionSelectTemplateDefault,
      actionSelectItem: this.actionSelectItemTemplate || this.ngxChatUiActionSelectItemTemplateDefault,
      actionZipcode: this.actionZipcodeTemplate || this.ngxChatUiActionZipcodeTemplateDefault,
    });
    this.ngxChatUiService.templatesGet('container')
      .subscribe(template => this.template = template);
    this.response.subscribe(() => this.onResponse());
  }

  onResponse() {
    this.ngxChatUiService.stateSet({ isSending: true });
  }
}
