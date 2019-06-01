import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { getMainDefinition } from 'apollo-utilities';
import { setContext } from 'apollo-link-context';
import { AuthService } from './services';
import { OperationDefinitionNode } from 'graphql';
import { environment } from '../environments/environment';

export function createApollo(httpLink: HttpLink, authService: AuthService) {
  const linkHttp = httpLink.create({
    uri: environment.graphqlUrl,
  });

  const auth = setContext(() => {
    return {
      headers: authService.getToken() ? {
        authorization: `Bearer ${authService.getToken()}`,
      } : {},
    };
  });

  const linkSubscription = new WebSocketLink({
    uri: environment.subscriptionUrl,
    options: {
      reconnect: true,
      connectionParams: () => {
        return authService.getToken() ? {
          authorization: `Bearer ${authService.getToken()}`,
        } : {};
      },
    },
  });

  authService.subscriptionClient = (<any>linkSubscription).subscriptionClient;

  const link = split(
    ({ query }) => {
      const { kind, operation } = (getMainDefinition(query) as OperationDefinitionNode);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    linkSubscription,
    auth.concat(linkHttp),
  );
  return {
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, AuthService],
    },
  ],
})
export class GraphQLModule {}
