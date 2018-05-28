import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Credentials, RegisterModel, UserModel } from '../../models';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AppAuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
    this.user = this.getUser();
  }

  private TOKEN_KEY = 'access_token';
  private USER_KEY = 'user';
  private ADMINUSER = 'gheorghitavladnicolae@gmail.com';

  private user: UserModel;

  login(credentials: Credentials): Observable<UserModel> {
    return this.httpClient.post<UserModel>('login', credentials);
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
