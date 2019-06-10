import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { NgxChatUiContainerComponent } from './components/container/container.component';
import { NgxChatUiMessageListComponent } from './components/message/list/list.component';
import { NgxChatUiMessageItemComponent } from './components/message/item/item.component';
import { NgxChatUiActionComponent } from './components/action/action.component';
import { NgxChatUiMessagePartnerComponent } from './components/message/partner/partner.component';
import { NgxChatUiMessagePayloadComponent } from './components/message/payload/payload.component';
import { NgxChatUiMessagePayloadTextComponent } from './components/message/payload/text/text.component';
import { NgxChatUiMessagePayloadSelectComponent } from './components/message/payload/select/select.component';
import { NgxChatUiMessageMetaComponent } from './components/message/meta/meta.component';
import { NgxChatUiActionTextComponent } from './components/action/text/text.component';
import { NgxChatUiActionAutocompleteComponent } from './components/action/autocomplete/autocomplete.component';
import { NgxChatUiActionSelectComponent } from './components/action/select/select.component';
import { NgxChatUiActionSelectItemComponent } from './components/action/select/item/item.component';
import { NgxChatUiMessageTypingComponent } from './components/message/typing/typing.component';
import { NgxChatUiMessagePayloadAutocompleteComponent } from './components/message/payload/autocomplete/autocomplete.component';
import { NgxChatUiActionUploadComponent } from './components/action/upload/upload.component';
import { NgxChatUiMessagePayloadUploadComponent } from './components/message/payload/upload/upload.component';

export * from './services';
export * from './interfaces';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    DropzoneModule,
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
    NgxChatUiMessagePayloadAutocompleteComponent,
    NgxChatUiMessagePayloadUploadComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiActionComponent,
    NgxChatUiActionTextComponent,
    NgxChatUiActionAutocompleteComponent,
    NgxChatUiActionUploadComponent,
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
    NgxChatUiMessagePayloadAutocompleteComponent,
    NgxChatUiMessagePayloadUploadComponent,
    NgxChatUiMessageMetaComponent,
    NgxChatUiActionComponent,
    NgxChatUiActionTextComponent,
    NgxChatUiActionAutocompleteComponent,
    NgxChatUiActionUploadComponent,
    NgxChatUiActionSelectComponent,
    NgxChatUiActionSelectItemComponent
  ]
})
export class NgxChatUiModule {}
