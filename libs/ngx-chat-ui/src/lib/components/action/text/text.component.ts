import { Component, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageType,
} from '../../../interfaces';

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

  constructor(
    private formBuilder: FormBuilder,
    public ngxChatUiService: NgxChatUiService
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
    (this as any).response.emit({
      chatKey: this.chatKey,
      payload: {
        type: INgxChatUiMessageType.text,
        value: this.form.value.text,
      },
    });
  }
}
