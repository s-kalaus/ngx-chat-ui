import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';
import {
  INgxChatUiDialogEnd,
  INgxChatUiItemAction,
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItemAction,
  INgxChatUiMessagePartner,
  INgxChatUiMessagePayload,
  INgxChatUiResponse,
  INgxChatUiState
} from '../../interfaces';
import { BaseComponent } from '../../classes';

@Component({
  selector: 'ngx-chat-ui-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxChatUiContainerComponent extends BaseComponent implements OnChanges {
  @ViewChild('containerTemplateDefault', { static: true }) containerTemplateDefault: TemplateRef<any>;
  @ViewChild('messageTypingTemplateDefault', { static: true }) messageTypingTemplateDefault: TemplateRef<any>;
  @ViewChild('messageListTemplateDefault', { static: true }) messageListTemplateDefault: TemplateRef<any>;
  @ViewChild('messageItemTemplateDefault', { static: true }) messageItemTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePartnerTemplateDefault', { static: true }) messagePartnerTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadTemplateDefault', { static: true }) messagePayloadTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadTextTemplateDefault', { static: true }) messagePayloadTextTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadUploadTemplateDefault', { static: true }) messagePayloadUploadTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadSelectTemplateDefault', { static: true }) messagePayloadSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('messagePayloadAutocompleteTemplateDefault', { static: true }) messagePayloadAutocompleteTemplateDefault: TemplateRef<any>;
  @ViewChild('messageMetaTemplateDefault', { static: true }) messageMetaTemplateDefault: TemplateRef<any>;
  @ViewChild('actionTemplateDefault', { static: true }) actionTemplateDefault: TemplateRef<any>;
  @ViewChild('actionTextTemplateDefault', { static: true }) actionTextTemplateDefault: TemplateRef<any>;
  @ViewChild('actionAutocompleteTemplateDefault', { static: true }) actionAutocompleteTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectTemplateDefault', { static: true }) actionSelectTemplateDefault: TemplateRef<any>;
  @ViewChild('actionSelectItemTemplateDefault', { static: true }) actionSelectItemTemplateDefault: TemplateRef<any>;
  @ViewChild('actionUploadTemplateDefault', { static: true }) actionUploadTemplateDefault: TemplateRef<any>;

  @Input() containerTemplate: TemplateRef<any>;
  @Input() messageTypingTemplate: TemplateRef<any>;
  @Input() messageListTemplate: TemplateRef<any>;
  @Input() messageItemTemplate: TemplateRef<any>;
  @Input() messagePartnerTemplate: TemplateRef<any>;
  @Input() messagePayloadTemplate: TemplateRef<any>;
  @Input() messagePayloadTextTemplate: TemplateRef<any>;
  @Input() messagePayloadUploadTemplate: TemplateRef<any>;
  @Input() messagePayloadSelectTemplate: TemplateRef<any>;
  @Input() messagePayloadAutocompleteTemplate: TemplateRef<any>;
  @Input() messageMetaTemplate: TemplateRef<any>;
  @Input() actionTemplate: TemplateRef<any>;
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
  @Output() dialogEnd: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();
  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  template: TemplateRef<any>;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

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

  init() {
    this.ngxChatUiService.templatesSet(this.ngxChatUiService.templateKeys.reduce(
      (prev, key) => ({ ...prev, [key]: this[`${key}Template`] || this[`${key}TemplateDefault`]}),
      {},
    ), this.chatKey);
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('container', this.chatKey)
        .subscribe(template => this.template = template),
      this.ngxChatUiService
        .response$
        .subscribe(response => this.onResponse(response)),
      this.ngxChatUiService
        .itemAction$
        .subscribe(itemAction => this.onItemAction(itemAction)),
      this.ngxChatUiService
        .dialogEnd$
        .subscribe(dialogEnd => this.onDialogEnd(dialogEnd)),
    );
  }

  destroy() {
    this.ngxChatUiService.cleanup(this.chatKey);
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

  onDialogEnd(dialogEnd: INgxChatUiDialogEnd) {
    if (dialogEnd.chatKey !== this.chatKey) {
      return;
    }
    if (this.dialogEnd) {
      this.dialogEnd.emit(dialogEnd.payload);
    }
  }
}
