import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxChatUiService } from '@ngx-chat-ui-lib/services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessagePayload,
  INgxChatUiMessageType,
} from '@ngx-chat-ui-lib/interfaces';

@Component({
  selector: 'ngx-chat-ui-action-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionTextComponent implements OnInit {
  @Input() chatKey = 'default';

  form: FormGroup;
  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;
  @Output() response: EventEmitter<INgxChatUiMessagePayload> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private ngxChatUiService: NgxChatUiService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('actionText')
      .subscribe(template => this.template = template);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.response.emit({
      type: INgxChatUiMessageType.text,
      text: this.form.value.text,
    });
  }
}
