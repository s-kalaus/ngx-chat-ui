import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import graphqlTag from 'graphql-tag';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { INgxChatUiMessage, INgxChatUiMessagePartner } from '@ngx-chat-ui/libs/ngx-chat-ui';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private apollo: Apollo,
    private authService: AuthService
  ) {
  }

  getProfile(): Observable<string> {
    return this.apollo
      .query({ query: graphqlTag`query{ token }` })
      .pipe(
        switchMap((result: any) => {
          const token = (result.data as any).token;
          this.authService.setToken(token);
          return of(token);
        }),
      );
  }

  getConversation(conversationType: string): Observable<any> {
    return this.apollo
      .query({
        query: graphqlTag`query conversation($conversationType: String!) {
          conversation(conversationType: $conversationType){
            conversationId
            partners{
              messagePartnerId
              firstName
              lastName
            }
            messages{
              messageId
              messagePartnerId
              payload{
                type
                text
                item
                zipcode
                messageId
              }
              action{
                type
                className
                items{
                  id
                  icon
                  text
                  className
                }
              }
            }
          }
        }`,
        variables: { conversationType }
      })
      .pipe(
        switchMap((result: any) => of((result.data as any).conversation)),
      );
  }

  subscribeConversation(conversationId: string): Observable<any> {
    return this.apollo
      .subscribe({
        query: graphqlTag`subscription messageAdded($conversationId: ID!) {
          messageAdded(conversationId: $conversationId){
            messageId
            messagePartnerId
            payload{
              type
              text
              item
              zipcode
              messageId
            }
            action{
              type
              className
              items{
                id
                icon
                text
                className
              }
            }
          }
        }`,
        variables: { conversationId }
      });
  }

  subscribeConversationState(conversationId: string): Observable<any> {
    return this.apollo
      .subscribe({
        query: graphqlTag`subscription conversationStateChanged($conversationId: ID!) {
          conversationStateChanged(conversationId: $conversationId){
            isTyping
          }
        }`,
        variables: { conversationId }
      });
  }

  addMessage(conversationId: string, payload: any): Observable<any> {
    return this.apollo
      .mutate({
        mutation: graphqlTag`mutation messageAdd($conversationId: ID!, $payload: MessagePayloadInput) {
          messageAdd(conversationId: $conversationId, payload: $payload){
            messageId
          }
        }`,
        variables: { conversationId, payload }
      })
      .pipe(
        switchMap((result: any) => of((result.data as any).message)),
      );
  }
}
