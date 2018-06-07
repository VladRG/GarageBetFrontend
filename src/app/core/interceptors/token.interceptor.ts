import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppAuthService } from '../services';
import { tap, catchError } from 'rxjs/operators';
import { } from 'selenium-webdriver/http';
import { UserModel } from '@app/models';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private service: AppAuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.service.checkLogin()) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.service.getToken()}`
        }
      });
    }

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const token = event.headers.get('Authorization');
          if (token) {
            this.service.setToken(token.replace('Bearer ', ''));
            this.service.storeUser(event.body as UserModel);
          }
        }
      }));
  }
}
