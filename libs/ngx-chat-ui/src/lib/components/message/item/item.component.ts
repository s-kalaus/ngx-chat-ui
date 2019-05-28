import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import { INgxChatUiMessage } from '../../../interfaces';

@Component({
  selector: 'ngx-chat-ui-message-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiMessageItemComponent implements OnInit {
  @ViewChild('elRef') elRef: ElementRef;
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    private ngxChatUiService: NgxChatUiService
  ) { }

  ngOnInit() {
    this.ngxChatUiService.templatesGet('messageItem')
      .subscribe(template => this.template = template);

    this.elRef.nativeElement.scrollIntoView({ behavior: 'smooth' })
  }
}
