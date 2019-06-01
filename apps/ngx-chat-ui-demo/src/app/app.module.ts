import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { NgxChatUiModule } from '@ngx-chat-ui/libs/ngx-chat-ui';
import { HttpClientModule } from '@angular/common/http';

export function tokenGetter() {
  return null;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxChatUiModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
