import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageType,
} from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-action-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionTextComponent extends BaseComponent {
  @Input() chatKey = 'default';

  form: FormGroup;
  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  constructor(
    private formBuilder: FormBuilder,
    public ngxChatUiService: NgxChatUiService
  ) {
    super();
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      text: ['', [Validators.required]]
    });
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('actionText', this.chatKey)
        .subscribe(template => this.template = template),
    );
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
