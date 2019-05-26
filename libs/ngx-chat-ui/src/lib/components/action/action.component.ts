import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../services/chat.service';

@Component({
  selector: 'ngx-chat-ui-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionComponent implements OnInit {
  @Input() chatKey = 'default';

  @Input() action: any = null;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    const subject = this.ngxChatUiService.actionGet(this.chatKey);
    subject.subscribe(action => this.action = action);
  }
}
