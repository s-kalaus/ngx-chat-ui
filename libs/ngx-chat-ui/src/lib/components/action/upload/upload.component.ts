import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { DropzoneConfigInterface, DropzoneDirective } from 'ngx-dropzone-wrapper';
import { NgxChatUiService } from '../../../services/chat.service';
import {
  INgxChatUiMessage,
  INgxChatUiMessageActionUploadFile,
  INgxChatUiMessageType
} from '../../../interfaces';
import { BaseComponent } from '../../../classes';

@Component({
  selector: 'ngx-chat-ui-action-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxChatUiActionUploadComponent extends BaseComponent {
  @Input() chatKey = 'default';

  template: TemplateRef<any>;

  @Input() message: INgxChatUiMessage;

  value: INgxChatUiMessageActionUploadFile[] = [];
  config: DropzoneConfigInterface;
  uploadCallback: Function;
  isSingle = false;
  isUploading = false;

  constructor(
    public ngxChatUiService: NgxChatUiService
  ) {
    super();
  }

  init() {
    this.subscriptions.push(
      this.ngxChatUiService
        .templatesGet('actionUpload', this.chatKey)
        .subscribe(template => this.template = template),
      this.ngxChatUiService
        .callbacksGet(this.chatKey)
        .subscribe(callbacks => {
          const action = this.message.action as any;
          this.uploadCallback = callbacks[action.callback];
          this.config = (action.meta && action.meta.config) || {};
          this.isSingle = action.meta && action.meta.single;
        }),
    );
  }

  onUploadSuccess(dropzone: DropzoneDirective, file: any) {
    this.uploadCallback(file[1], data => {
      this.value.push({ ...data });
      this.removeDropzoneFile(dropzone, file[0]);
      if (this.isSingle) {
        this.submit();
      }
    });
  }

  onUploadError(dropzone: DropzoneDirective, file: any) {
    this.removeDropzoneFile(dropzone, file[0]);
  }

  onAddedFile() {
    this.isUploading = true;
  }

  onComplete() {
    this.isUploading = false;
  }

  removeDropzoneFile(dropzone: DropzoneDirective, file: any) {
    const dropzoneRef = dropzone.dropzone();
    dropzoneRef.removeFile(file);
  }

  removeFile(file: INgxChatUiMessageActionUploadFile) {
    const index = this.value.findIndex(theFile => theFile === file);
    if (index !== -1) {
      this.value.splice(index, 1);
    }
  }

  submit() {
    (this as any).response.emit({
      chatKey: this.chatKey,
      payload: {
        type: INgxChatUiMessageType.upload,
        value: this.value.map(file => ({
          name: file.name,
          url: file.url,
        })),
      },
    });
  }
}
