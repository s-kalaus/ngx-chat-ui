import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessagePayload,
  INgxChatUiMessageType,
} from '../../../interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-chat-ui-action-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionZipcodeComponent implements OnInit {
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
      zipcode: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.ngxChatUiService
      .templatesGet('actionZipcode')
      .subscribe(template => this.template = template);
  }

  submit() {
    this.response.emit({
      type: INgxChatUiMessageType.zipcode,
      zipcode: this.form.value.zipcode,
    });
  }
}
