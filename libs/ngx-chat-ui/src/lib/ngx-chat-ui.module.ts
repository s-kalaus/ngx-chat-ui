import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NgxChatUiContainerComponent } from '@ngx-chat-ui-lib/components/container/container.component';
import { NgxChatUiMessageListComponent } from '@ngx-chat-ui-lib/components/message/list/list.component';
import { NgxChatUiMessageItemComponent } from '@ngx-chat-ui-lib/components/message/item/item.component';
import { NgxChatUiActionComponent } from '@ngx-chat-ui-lib/components/action/action.component';
import { NgxChatUiMessagePartnerComponent } from '@ngx-chat-ui-lib/components/message/partner/partner.component';
import { NgxChatUiMessagePayloadComponent } from '@ngx-chat-ui-lib/components/message/payload/payload.component';
import { NgxChatUiMessagePayloadTextComponent } from '@ngx-chat-ui-lib/components/message/payload/text/text.component';
import { NgxChatUiMessagePayloadSelectComponent } from '@ngx-chat-ui-lib/components/message/payload/select/select.component';
import { NgxChatUiMessageMetaComponent } from '@ngx-chat-ui-lib/components/message/meta/meta.component';
import { NgxChatUiActionTextComponent } from '@ngx-chat-ui-lib/components/action/text/text.component';
import { NgxChatUiActionSelectComponent } from '@ngx-chat-ui-lib/components/action/select/select.component';
import { NgxChatUiActionSelectItemComponent } from '@ngx-chat-ui-lib/components/action/select/item/item.component';
import { NgxChatUiMessageTypingComponent } from '@ngx-chat-ui-lib/components/message/typing/typing.component';

export * from '@ngx-chat-ui-lib/services';
export * from '@ngx-chat-ui-lib/interfaces';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NgxChatUiContainerComponent,
    NgxChatUiMessageTypingComponent,
    NgxChatUiMessageListComponent,
    NgxChatUiMessageItemComponent,
    NgxChatUiMessagePartnerComponent,
    NgxChatUiMessagePayloadComponent,
    NgxChatUiMessagePayloadTextComponent,
    NgxChatUiMessagePayloadSelectComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiActionComponent,
    NgxChatUiActionTextComponent,
    NgxChatUiActionSelectComponent,
    NgxChatUiActionSelectItemComponent
  ],
  exports: [
    NgxChatUiContainerComponent,
    NgxChatUiMessageTypingComponent,
    NgxChatUiMessageListComponent,
    NgxChatUiMessageItemComponent,
    NgxChatUiMessagePartnerComponent,
    NgxChatUiMessagePayloadComponent,
    NgxChatUiMessagePayloadTextComponent,
    NgxChatUiMessagePayloadSelectComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiActionComponent,
    NgxChatUiActionTextComponent,
    NgxChatUiActionSelectComponent,
    NgxChatUiActionSelectItemComponent
  ]
})
export class NgxChatUiModule {}
