import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChatUiContainerComponent } from './components/container/container.component';
import { NgxChatUiMessageListComponent } from './components/message/list/list.component';
import { NgxChatUiMessageItemComponent } from './components/message/item/item.component';
import { NgxChatUiActionComponent } from './components/action/action.component';
import { NgxChatUiMessageSpacerComponent } from './components/message/spacer/spacer.component';
import { NgxChatUiMessagePartnerComponent } from './components/message/partner/partner.component';
import { NgxChatUiMessageTextComponent } from './components/message/text/text.component';
import { NgxChatUiMessageMetaComponent } from './components/message/meta/meta.component';

export * from './services';
export * from './interfaces';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NgxChatUiContainerComponent,
    NgxChatUiMessageListComponent,
    NgxChatUiMessageItemComponent,
    NgxChatUiMessagePartnerComponent,
    NgxChatUiMessageTextComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiMessageSpacerComponent,
    NgxChatUiActionComponent
  ],
  exports: [
    NgxChatUiContainerComponent,
    NgxChatUiMessageListComponent,
    NgxChatUiMessageItemComponent,
    NgxChatUiMessagePartnerComponent,
    NgxChatUiMessageTextComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiMessageSpacerComponent,
    NgxChatUiActionComponent
  ]
})
export class NgxChatUiModule {}
