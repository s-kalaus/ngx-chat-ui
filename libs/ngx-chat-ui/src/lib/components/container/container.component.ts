import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NgxChatUiService } from '@ngx-chat-ui-lib/services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessagePartner,
  INgxChatUiMessagePayload,
  INgxChatUiState
} from '@ngx-chat-ui-lib/interfaces';

@Component({
  selector: 'ngx-chat-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxChatUiContainerComponent implements OnInit, OnChanges {
  @ViewChild('containerTemplateDefault') containerTemplateDefault: TemplateRef<any>;
  @ViewChild('messageTypingTemplateDefault') messageTypingTemplateDefault: TemplateRef<any>;
  @ViewChild('messageListTemplateDefault') messageListTemplateDefault: TemplateRef<any>;
  @ViewChild('messageItemTemplateDefault') messageItemTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePartnerTemplateDefault') messagePartnerTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadTemplate') messagePayloadTemplate: TemplateRef<any>;
  @ViewChild('messagePayloadTextTemplateDefault') messagePayloadTextTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadSelectTemplateDefault') messagePayloadSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('messageMetaTemplateDefault') messageMetaTemplateDefault: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;
  @ViewChild('actionTextTemplateDefault') actionTextTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectTemplateDefault') actionSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectItemTemplateDefault') actionSelectItemTemplateDefault: TemplateRef<any>;

  @Input() containerTemplate: TemplateRef<any>;
  @Input() messageTypingTemplate: TemplateRef<any>;
  @Input() messageListTemplate: TemplateRef<any>;
  @Input() messageItemTemplate: TemplateRef<any>;
  @Input() messagePartnerTemplate: TemplateRef<any>;
  @Input() messagePayloadTextTemplate: TemplateRef<any>;
  @Input() messagePayloadSelectTemplate: TemplateRef<any>;
  @Input() messageMetaTemplate: TemplateRef<any>;
  @Input() actionTextTemplate: TemplateRef<any>;
  @Input() actionSelectTemplate: TemplateRef<any>;
  @Input() actionSelectItemTemplate: TemplateRef<any>;

  @Input() chatKey = 'default';
  @Input() messages: INgxChatUiMessage[];
  @Input() partners: INgxChatUiMessagePartner[];
  @Input() state: INgxChatUiState;

  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  template: TemplateRef<any>;
  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.partners !== undefined) {
      this.ngxChatUiService
        .partnersSet(changes.partners.currentValue, this.chatKey);
    }
    if (changes.messages !== undefined) {
      this.ngxChatUiService
        .messagesSet(changes.messages.currentValue, this.chatKey);
    }
    if (changes.state !== undefined) {
      this.ngxChatUiService
        .stateSet(changes.state.currentValue, this.chatKey);
    }
  }

  ngOnInit() {
    this.ngxChatUiService.templatesSet({
      container: this.containerTemplate || this.containerTemplateDefault,
      messageTyping: this.messageTypingTemplate || this.messageTypingTemplateDefault,
      messageList: this.messageListTemplate || this.messageListTemplateDefault,
      messageItem: this.messageItemTemplate || this.messageItemTemplateDefault,
      messagePartner: this.messagePartnerTemplate || this.messagePartnerTemplateDefault,
      messagePayload: this.messagePayloadTemplate,
      messagePayloadText: this.messagePayloadTextTemplate || this.messagePayloadTextTemplateDefault,
      messagePayloadSelect: this.messagePayloadSelectTemplate || this.messagePayloadSelectTemplateDefault,
      messageMeta: this.messageMetaTemplate || this.messageMetaTemplateDefault,
      action: this.actionTemplate,
      actionText: this.actionTextTemplate || this.actionTextTemplateDefault,
      actionSelect: this.actionSelectTemplate || this.actionSelectTemplateDefault,
      actionSelectItem: this.actionSelectItemTemplate || this.actionSelectItemTemplateDefault,
    });
    this.ngxChatUiService
      .templatesGet('container')
      .subscribe(template => this.template = template);
    this.response
      .subscribe(() => this.onResponse());
  }

  onResponse() {
    this.ngxChatUiService
      .stateSet({ isSending: true });
  }
}
