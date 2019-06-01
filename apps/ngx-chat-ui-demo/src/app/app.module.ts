import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NgxChatUiModule } from '@ngx-chat-ui/libs/ngx-chat-ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxChatUiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
