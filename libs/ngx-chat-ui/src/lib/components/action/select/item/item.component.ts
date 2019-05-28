import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../../services/chat.service';
import { INgxChatUiMessageActionSelectItem } from '../../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-action-select-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionSelectItemComponent implements OnInit {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() item: INgxChatUiMessageActionSelectItem;
  @Output() response: EventEmitter<INgxChatUiMessageActionSelectItem> = new EventEmitter();

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('actionSelectItem')
      .subscribe(template => this.template = template);
  }
}
