import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  INgxChatUiMessage,
  INgxChatUiMessagePartner,
  INgxChatUiState,
} from '@ngx-chat-ui-lib/interfaces';

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
  [chatKey: string]: BehaviorSubject<INgxChatUiMessage>
};

type statesStoreType = {
  [chatKey: string]: BehaviorSubject<INgxChatUiState>
};

type partnersStoreType = {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessagePartner[]>
};

@Injectable({
  providedIn: 'root'
})
export class NgxChatUiService {
  private templatesStore: templateStoreType = {
    container$: new BehaviorSubject<TemplateRef<any>>(null),
    messageTyping$: new BehaviorSubject<TemplateRef<any>>(null),
    messageList$: new BehaviorSubject<TemplateRef<any>>(null),
    messageItem$: new BehaviorSubject<TemplateRef<any>>(null),
    messagePartner$: new BehaviorSubject<TemplateRef<any>>(null),
    messagePayload$: new BehaviorSubject<TemplateRef<any>>(null),
    messagePayloadText$: new BehaviorSubject<TemplateRef<any>>(null),
    messagePayloadSelect$: new BehaviorSubject<TemplateRef<any>>(null),
    messageMeta$: new BehaviorSubject<TemplateRef<any>>(null),
    action$: new BehaviorSubject<TemplateRef<any>>(null),
    actionText$: new BehaviorSubject<TemplateRef<any>>(null),
    actionSelect$: new BehaviorSubject<TemplateRef<any>>(null),
    actionSelectItem$: new BehaviorSubject<TemplateRef<any>>(null),
  };

  private partnersStore: partnersStoreType = {};
  private messagesStore: messagesStoreType = {};
  private actionsStore: actionsStoreType = {};
  private statesStore: statesStoreType = {};

  templatesSet(templates: templateParamType) {
    Object.keys(this.templatesStore)
      .forEach(templateKey => {
        const key = templateKey.replace(/\$/, '');
        if (templates[key] !== undefined) {
          this.templatesStore[templateKey].next(templates[key]);
        }
      });
  }

  templatesGet(templateKey: string): BehaviorSubject<TemplateRef<any>> {
    return this.templatesStore[`${templateKey}$`];
  }

  ensureActionsKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.actionsStore[key]) {
      this.actionsStore[key] = new BehaviorSubject<INgxChatUiMessage>(null);
    }
  }

  ensureStateKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.statesStore[key]) {
      this.statesStore[key] = new BehaviorSubject<INgxChatUiState>(null);
    }
  }

  ensureMessagesKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.messagesStore[key]) {
      this.messagesStore[key] = new BehaviorSubject<INgxChatUiMessage[]>([]);
      this.messagesStore[key]
        .subscribe(messages => this.onMessagesUpdated(messages, chatKey));
    }
  }

  ensurePartnersKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.partnersStore[key]) {
      this.partnersStore[key] = new BehaviorSubject<INgxChatUiMessagePartner[]>([]);
    }
  }

  partnersSet(partners: INgxChatUiMessagePartner[], chatKey: string = 'default') {
    this.partnersGet(chatKey)
      .next(partners);
  }

  partnersGet(chatKey: string = 'default'): BehaviorSubject<INgxChatUiMessagePartner[]> {
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
    if (msg.messagePartnerId && !msg.partner) {
      msg.partner = this.partnersGet(chatKey).getValue().find(messagePartner => messagePartner.messagePartnerId === msg.messagePartnerId);
    }
    return msg;
  }

  messagesClear(chatKey: string = 'default') {
    this.messagesGet(chatKey).next([]);
  }

  messagesGet(chatKey: string = 'default'): BehaviorSubject<INgxChatUiMessage[]> {
    this.ensureMessagesKey(chatKey);
    const key = `${chatKey}$`;
    return this.messagesStore[key];
  }

  onMessagesUpdated(messages: INgxChatUiMessage[], chatKey: string = 'default') {
    const len = messages.length - 1;
    let lastMessage = null;
    let lastContextMessage = null;
    for (let i = len; i >= 0; i--) {
      if (!lastMessage) {
        lastMessage = messages[i];
      }
      if (!messages[i].isIncoming) {
        break;
      }
      if (messages[i].action) {
        lastContextMessage = messages[i];
        break;
      }
    }
    this.actionUpdate(lastContextMessage, chatKey);
    if (lastMessage) {
      this.stateSet(lastMessage.isIncoming ? { isTyping: false } : { isSending: false });
    }
  }

  actionGet(chatKey: string = 'default'): BehaviorSubject<INgxChatUiMessage> {
    this.ensureActionsKey(chatKey);
    return this.actionsStore[`${chatKey}$`];
  }

  actionSet(action: INgxChatUiMessage | null, chatKey: string = 'default') {
    this.actionGet(chatKey)
      .next(action);
  }

  actionUpdate(message: INgxChatUiMessage | null, chatKey: string = 'default') {
    this.actionSet(message || null, chatKey);
  }

  stateGet(chatKey: string = 'default'): BehaviorSubject<INgxChatUiState> {
    this.ensureStateKey(chatKey);
    return this.statesStore[`${chatKey}$`];
  }

  stateSet(state: INgxChatUiState | null, chatKey: string = 'default') {
    this.stateGet(chatKey).next({
      ...this.stateGet(chatKey).getValue(),
      ...state,
    });
  }
}
