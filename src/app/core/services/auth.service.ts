import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credentials, RegisterModel, UserModel } from '../../models';
import { Router } from '@angular/router';
import * as jwtDecode from 'jwt-decode';

@Injectable()
export class AppAuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
    this.user = this.getUser();
  }

  private TOKEN_KEY = 'access_token';
  private USER_KEY = 'user';
  private ADMINUSER = 'gheorghitavladnicolae@gmail.com';
  private user: UserModel;

  getUsers(): Observable<Array<UserModel>> {
    return this.httpClient.get<Array<UserModel>>('user');
  }

  login(credentials: Credentials): Observable<UserModel> {
    return this.httpClient.post<UserModel>('login', credentials);
  }

  checkLogin(): boolean {
    const token = localStorage.getItem(this.TOKEN_KEY);
    if (!token || this.isTokenExpired(token)) {
      this.clearToken();
      this.router.navigateByUrl('login', {
        queryParams: {
          backTo: this.router.url
        }
      });
      return false;
    }
    return true;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = localStorage.getItem(this.TOKEN_KEY);
    }
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  }

  register(credentials: RegisterModel): Observable<any> {
    return this.httpClient.post('register', credentials);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAdmin() {
    return this.user.email.toLowerCase() === this.ADMINUSER;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.router.navigateByUrl('login');
  }

  storeUser(user: UserModel) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.user = user;
  }

  getUser(): UserModel {
    if (this.isLoggedIn()) {
      return JSON.parse(localStorage.getItem(this.USER_KEY)) as UserModel;
    }
    return null;
  }
}
