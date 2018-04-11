import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Credentials, RegisterModel } from '../../models';

@Injectable()
export class AppAuthService {

  constructor(private httpClient: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    return this.httpClient.post('login', credentials);
  }

  register(credentials: RegisterModel): Observable<any> {
    return this.httpClient.post('register', credentials);
  }
}
