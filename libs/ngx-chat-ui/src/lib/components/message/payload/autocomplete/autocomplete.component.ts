import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessage } from '../../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-payload-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessagePayloadAutocompleteComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  value: string;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('messagePayloadAutocomplete')
      .subscribe(template => {this.template = template});
    this.value = this.message.payload.value.join(', ');
  }
}
