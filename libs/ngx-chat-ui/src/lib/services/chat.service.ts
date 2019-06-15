import { EventEmitter, Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  INgxChatUiDialogEnd,
  INgxChatUiItemAction,
  INgxChatUiMessage,
  INgxChatUiMessageActionSelectItem,
  INgxChatUiMessagePartner,
  INgxChatUiMessageType,
  INgxChatUiResponse,
  INgxChatUiState
} from '../interfaces';

interface TemplateStoreType {
  [chatKey: string]: {
    [templateKey: string]: BehaviorSubject<TemplateRef<any>>;
  };
}

interface TemplateParamType {
  [templateKey: string]: TemplateRef<any>;
}

interface MessagesStoreType {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessage[]>;
}

interface ActionsStoreType {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessage>;
}

interface StatesStoreType {
  [chatKey: string]: BehaviorSubject<INgxChatUiState>;
}

interface CallbacksStoreType {
  [chatKey: string]: BehaviorSubject<{ [name: string]: Function }>;
}

interface PartnersStoreType {
  [chatKey: string]: BehaviorSubject<INgxChatUiMessagePartner[]>;
}

@Injectable({
  providedIn: 'root'
})
export class NgxChatUiService {
  readonly templateKeys = [
    'container',
    'messageTyping',
    'messageList',
    'messageItem',
    'messagePartner',
    'messagePayload',
    'messagePayloadText',
    'messagePayloadSelect',
    'messagePayloadAutocomplete',
    'messagePayloadUpload',
    'messageMeta',
    'action',
    'actionText',
    'actionAutocomplete',
    'actionSelect',
    'actionSelectItem',
    'actionUpload',
  ];

  private templatesStore: TemplateStoreType = {};
  private partnersStore: PartnersStoreType = {};
  private messagesStore: MessagesStoreType = {};
  private actionsStore: ActionsStoreType = {};
  private statesStore: StatesStoreType = {};
  private callbacksStore: CallbacksStoreType = {};
  itemAction$: EventEmitter<INgxChatUiItemAction> = new EventEmitter();
  dialogEnd$: EventEmitter<INgxChatUiDialogEnd> = new EventEmitter();
  response$: EventEmitter<INgxChatUiResponse> = new EventEmitter();

  templatesSet(templates: TemplateParamType, chatKey: string = 'default') {
    this.ensureTemplatesKey(chatKey);
    this.templateKeys
      .forEach(templateKey => {
        if (templates[templateKey] !== undefined) {
          this.templatesStore[`${chatKey}$`][`${templateKey}$`].next(templates[templateKey]);
        }
      });
  }

  templatesGet(templateKey: string, chatKey: string = 'default'): BehaviorSubject<TemplateRef<any>> {
    this.ensureTemplatesKey(chatKey);
    return this.templatesStore[`${chatKey}$`][`${templateKey}$`];
  }

  ensureTemplatesKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.templatesStore[key]) {
      this.templatesStore[key] = this.templateKeys.reduce(
        (prev, templateKey) => ({ ...prev, [`${templateKey}$`]: new BehaviorSubject<TemplateRef<any>>(null)}),
        {},
      );
    }
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

  ensureCallbacksKey(chatKey: string = 'default') {
    const key = `${chatKey}$`;
    if (!this.callbacksStore[key]) {
      this.callbacksStore[key] = new BehaviorSubject<{ [name: string]: Function }>(null);
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
    messages.forEach(message => {
      const subject = this.messagesGet(chatKey);
      const current = subject.getValue();
      const next = this.processMessage(message, chatKey);
      if (next.payload.type === INgxChatUiMessageType.dialogEnd) {
        this.dialogEnd$.emit({
          chatKey,
          payload: next.payload
        });
      } else {
        subject.next(current.concat([next]));
      }
    });
  }

  messagesSet(messages: INgxChatUiMessage[], chatKey: string = 'default') {
    this.messagesClear(chatKey);
    this.messagesAdd(messages, chatKey);
  }

  messagesClear(chatKey: string = 'default') {
    this.messagesGet(chatKey).next([]);
  }

  processMessage(message: INgxChatUiMessage, chatKey: string = 'default'): INgxChatUiMessage {
    const msg = { ... message };
    if (msg.messagePartnerId && !msg.partner) {
      msg.partner = this.partnersGet(chatKey).getValue().find(messagePartner => messagePartner.messagePartnerId === msg.messagePartnerId);
    }
    const item = this.getItemForItemAction(message, chatKey);
    if (item && item.action) {
      this.itemAction$.emit({
        chatKey,
        payload: item.action
      });
    }
    return msg;
  }

  getItemForItemAction(message: INgxChatUiMessage, chatKey: string = 'default'): INgxChatUiMessageActionSelectItem {
    if (message.payload.type !== INgxChatUiMessageType.select) {
      return null;
    }
    let actionMessage;
    const messages = [ ... this.messagesGet(chatKey)
      .getValue() ].reverse();
    if (message.payload.messageId) {
      actionMessage = messages
        .find(theMessage => theMessage.messageId === message.payload.messageId);
    } else {
      actionMessage = messages
        .find(theMessage => theMessage.messageId !== message.messageId
          && theMessage.action.type === INgxChatUiMessageType.select
        );
    }
    const action = actionMessage && actionMessage.action;
    return action
      && action.items
      && action.items[message.payload.value];
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

  callbacksGet(chatKey: string = 'default'): BehaviorSubject<{ [name: string]: Function }> {
    this.ensureCallbacksKey(chatKey);
    return this.callbacksStore[`${chatKey}$`];
  }

  callbacksSet(callbacks: { [name: string]: Function }, chatKey: string = 'default') {
    this.callbacksGet(chatKey).next({
      ...this.callbacksGet(chatKey).getValue(),
      ...callbacks,
    });
  }

  cleanup(chatKey: string = 'default') {
  }
}
