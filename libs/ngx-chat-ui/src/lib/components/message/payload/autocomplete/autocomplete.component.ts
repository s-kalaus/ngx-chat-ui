import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessage } from '../../../../interfaces';
import { BaseComponent } from '../../../../classes';

@Component({
  selector: 'ngx-chat-ui-message-payload-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadAutocompleteComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  value: string;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('messagePayloadAutocomplete', this.chatKey)
        .subscribe(template => this.template = template),
    );
    this.value = this.message.payload.value.join(', ');
  }
}
