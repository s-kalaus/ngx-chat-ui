import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppComponent } from './components/app/app.component';
import { NgxChatUiModule } from '@ngx-chat-ui/libs/ngx-chat-ui';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'https://dashboard.pixc.com/uploadFile/test',
  acceptedFiles: 'image/*',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    NgxChatUiModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
