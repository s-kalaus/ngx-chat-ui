import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessageActionSelectItem } from '../../../../interfaces';
import { BaseComponent } from '../../../../classes';

@Component({
  selector: 'ngx-chat-ui-action-select-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionSelectItemComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() item: INgxChatUiMessageActionSelectItem;
  @Output() response: EventEmitter<INgxChatUiMessageActionSelectItem> = new EventEmitter();

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('actionSelectItem', this.chatKey)
        .subscribe(template => this.template = template),
    );
  }
}
