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
import { NgxChatUiService } from '../../services/chat.service';
import {
  INgxChatUiItemAction,
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItemAction,
  INgxChatUiMessagePartner,
  INgxChatUiMessagePayload,
  INgxChatUiResponse,
  INgxChatUiState
} from '../../interfaces';

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
  @ViewChild('messagePayloadUploadTemplateDefault') messagePayloadUploadTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadSelectTemplateDefault') messagePayloadSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadAutocompleteTemplateDefault') messagePayloadAutocompleteTemplateDefault: TemplateRef<any>;
  @ViewChild('messageMetaTemplateDefault') messageMetaTemplateDefault: TemplateRef<any>;
  @ViewChild('actionTemplate') actionTemplate: TemplateRef<any>;
  @ViewChild('actionTextTemplateDefault') actionTextTemplateDefault: TemplateRef<any>;
  @ViewChild('actionAutocompleteTemplateDefault') actionAutocompleteTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectTemplateDefault') actionSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectItemTemplateDefault') actionSelectItemTemplateDefault: TemplateRef<any>;
  @ViewChild('actionUploadTemplateDefault') actionUploadTemplateDefault: TemplateRef<any>;

  @Input() containerTemplate: TemplateRef<any>;
  @Input() messageTypingTemplate: TemplateRef<any>;
  @Input() messageListTemplate: TemplateRef<any>;
  @Input() messageItemTemplate: TemplateRef<any>;
  @Input() messagePartnerTemplate: TemplateRef<any>;
  @Input() messagePayloadTextTemplate: TemplateRef<any>;
  @Input() messagePayloadUploadTemplate: TemplateRef<any>;
  @Input() messagePayloadSelectTemplate: TemplateRef<any>;
  @Input() messagePayloadAutocompleteTemplate: TemplateRef<any>;
  @Input() messageMetaTemplate: TemplateRef<any>;
  @Input() actionTextTemplate: TemplateRef<any>;
  @Input() actionAutocompleteTemplate: TemplateRef<any>;
  @Input() actionSelectTemplate: TemplateRef<any>;
  @Input() actionSelectItemTemplate: TemplateRef<any>;
  @Input() actionUploadTemplate: TemplateRef<any>;

  @Input() chatKey = 'default';
  @Input() messages: INgxChatUiMessage[];
  @Input() partners: INgxChatUiMessagePartner[];
  @Input() state: INgxChatUiState;
  @Input() callbacks: {
    [name: string]: Function,
  };

  @Output() itemAction: EventEmitter<INgxChatUiMessageActionSelectItemAction> = new EventEmitter();
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
    if (changes.callbacks !== undefined) {
      this.ngxChatUiService
        .callbacksSet(changes.callbacks.currentValue, this.chatKey);
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
      messagePayloadUpload: this.messagePayloadUploadTemplate || this.messagePayloadUploadTemplateDefault,
      messagePayloadSelect: this.messagePayloadSelectTemplate || this.messagePayloadSelectTemplateDefault,
      messagePayloadAutocomplete: this.messagePayloadAutocompleteTemplate || this.messagePayloadAutocompleteTemplateDefault,
      messageMeta: this.messageMetaTemplate || this.messageMetaTemplateDefault,
      action: this.actionTemplate,
      actionText: this.actionTextTemplate || this.actionTextTemplateDefault,
      actionAutocomplete: this.actionAutocompleteTemplate || this.actionAutocompleteTemplateDefault,
      actionSelect: this.actionSelectTemplate || this.actionSelectTemplateDefault,
      actionSelectItem: this.actionSelectItemTemplate || this.actionSelectItemTemplateDefault,
      actionUpload: this.actionSelectTemplate || this.actionUploadTemplateDefault,
    });
    this.ngxChatUiService
      .templatesGet('container')
      .subscribe(template => this.template = template);
    this.ngxChatUiService
      .response$
      .subscribe(response => this.onResponse(response));
    this.ngxChatUiService
      .itemAction$
      .subscribe(itemAction => this.onItemAction(itemAction));
  }

  onResponse(response: INgxChatUiResponse) {
    if (response.chatKey !== this.chatKey) {
      return;
    }
    if (this.response) {
      this.response.emit(response.payload);
    }
    this.ngxChatUiService
      .stateSet({ isSending: true });
  }

  onItemAction(itemAction: INgxChatUiItemAction) {
    if (itemAction.chatKey !== this.chatKey) {
      return;
    }
    if (this.itemAction) {
      this.itemAction.emit(itemAction.payload);
    }
  }
}
