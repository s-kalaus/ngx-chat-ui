import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageType
} from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-action-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionAutocompleteComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;
  value: string[] = [];
  data: string[] = [];
  searchCallback: Function;
  isSingle = false;

  constructor(
    public ngxChatUiService: NgxChatUiService
  ) {
  }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('actionAutocomplete')
      .subscribe(template => this.template = template);
    this.ngxChatUiService
      .callbacksGet(this.chatKey)
      .subscribe(callbacks => {
        const action = this.message.action as any;
        this.searchCallback = callbacks[action.callback];
        this.isSingle = action.meta && action.meta.single;
      });
  }

  onChange(autocomplete: any, query: string) {
    this.searchCallback(query, data => this.data = data
      .filter(item => !this.value.find(theValue => theValue === item))
    );
  }

  onFocused(autocomplete: any) {
    autocomplete.clear();
    autocomplete.close();
    this.data = [];
  }

  select(autocomplete: any, value: string) {
    this.value.push(value);
    this.onFocused(autocomplete);
    if (this.isSingle) {
      this.submit();
    }
  }

  removeTag(value: string) {
    const index = this.value.findIndex(theValue => theValue === value);
    if (index !== -1) {
      this.value.splice(index, 1);
    }
  }

  submit() {
    if (!this.value.length) {
      return;
    }
    (this as any).response.emit({
      chatKey: this.chatKey,
      payload: {
        type: INgxChatUiMessageType.autocomplete,
        value: this.value,
      },
    });
  }
}
