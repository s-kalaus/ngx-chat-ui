import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INgxChatUiAction, INgxChatUiMessage, INgxChatUiMessagePartner } from '../interfaces';

type templateStoreType = {
  [templateKey: string]: BehaviorSubject<TemplateRef<any>>
};

type templateParamType = {
  [templateKey: string]: TemplateRef<any>
};

type messagesStoreType = {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessage[]>
};

type actionsStoreType = {
  [chatKey: string]: BehaviorSubject<INgxChatUiAction>
};

type partnersStoreType = {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessagePartner[]>
};

const defaultPartner: INgxChatUiMessagePartner = {
  firstName: 'Unknown',
  lastName: 'User'
};

@Injectable({
  providedIn: 'root'
})
export class NgxChatUiService {

  private templatesStore: templateStoreType = {
    container$: new BehaviorSubject<TemplateRef<any>>(null),
    messageList$: new BehaviorSubject<TemplateRef<any>>(null),
    messageItem$: new BehaviorSubject<TemplateRef<any>>(null),
    messagePartner$: new BehaviorSubject<TemplateRef<any>>(null),
    messageText$: new BehaviorSubject<TemplateRef<any>>(null),
    messageMeta$: new BehaviorSubject<TemplateRef<any>>(null)
  };

  private partnersStore: partnersStoreType = {};

  private messagesStore: messagesStoreType = {};

  private actionsStore: actionsStoreType = {};

  constructor() {
  }

  templatesSet(templates: templateParamType) {
    Object.keys(this.templatesStore).forEach(templateKey => {
      const key = templateKey.replace(/\$/, '');
      if (templates[key] !== undefined) {
        this.templatesStore[templateKey].next(templates[key]);
      }
    })
  }

  templatesGet(templateKey: string): BehaviorSubject<TemplateRef<any>> {
    return this.templatesStore[`${templateKey}$`];
  }

  ensureActionsKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.actionsStore[key]) {
      this.actionsStore[key] = new BehaviorSubject<INgxChatUiAction>(null);
    }
  }

  ensureMessagesKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.messagesStore[key]) {
      this.messagesStore[key] = new BehaviorSubject<INgxChatUiMessage[]>([]);
      this.messagesStore[key].subscribe(messages => this.onMessagesUpdated(messages, chatKey));
    }
  }

  ensurePartnersKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.partnersStore[key]) {
      this.partnersStore[key] = new BehaviorSubject<INgxChatUiMessagePartner[]>([]);
    }
  }

  partnersSet(partners: INgxChatUiMessagePartner[], chatKey: string = 'default') {
    this.partnersGet(chatKey).next(partners);
  }

  partnersGet(chatKey: string): BehaviorSubject<INgxChatUiMessagePartner[]> {
    this.ensurePartnersKey(chatKey);
    const key = `${chatKey}$`;
    return this.partnersStore[key];
  }

  messagesAdd(messages: INgxChatUiMessage[], chatKey: string = 'default') {
    const subject = this.messagesGet(chatKey);
    const current = subject.getValue();
    subject.next(current.concat(messages.map(message => this.processMessage(message, chatKey))));
  }

  messagesSet(messages: INgxChatUiMessage[], chatKey: string = 'default') {
    this.messagesGet(chatKey).next(messages.map(message => this.processMessage(message, chatKey)));
  }

  processMessage(message: INgxChatUiMessage, chatKey: string = 'default'): INgxChatUiMessage {
    const msg = { ... message };
    if (typeof msg.partner === 'string') {
      msg.partner = this.partnersGet(chatKey).getValue().find(partner => partner.id === message.partner) || defaultPartner;
    }
    return msg;
  }

  messagesClear(chatKey: string = 'default') {
    this.messagesGet(chatKey).next([]);
  }

  messagesGet(chatKey: string): BehaviorSubject<INgxChatUiMessage[]> {
    this.ensureMessagesKey(chatKey);
    const key = `${chatKey}$`;
    return this.messagesStore[key];
  }

  onMessagesUpdated(messages: INgxChatUiMessage[], chatKey: string = 'default') {
    this.actionUpdate(messages ? messages[messages.length - 1] : null, chatKey);
  }

  actionGet(chatKey: string): BehaviorSubject<INgxChatUiAction> {
    this.ensureActionsKey(chatKey);
    return this.actionsStore[`${chatKey}$`];
  }

  actionSet(action: INgxChatUiAction | null, chatKey: string = 'default') {
    this.actionGet(chatKey).next(action);
  }

  actionUpdate(message: INgxChatUiMessage | null, chatKey: string = 'default') {
    this.actionSet(message, chatKey);
  }
}
