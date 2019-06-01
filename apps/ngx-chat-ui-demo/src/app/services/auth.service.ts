import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Apollo } from 'apollo-angular';
import graphqlTag from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private userId: string | null = null;
  subscriptionClient: any;

  constructor(
    private jwtHelperService: JwtHelperService,
  ) {
  }

  setToken(token: string | null) {
    if (!token || this.jwtHelperService.isTokenExpired(token)) {
      return this.authError();
    }

    const tokenDecoded = this.jwtHelperService.decodeToken(token);

    if (!tokenDecoded || !tokenDecoded.userId) {
      return this.authError();
    }

    this.token = token;
    this.userId = tokenDecoded.userId;
  }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  authError() {
    this.token = null;
    this.userId = null;
  }
}
