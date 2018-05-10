import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppAuthService } from '../services';
import { tap } from 'rxjs/operators';
import { } from 'selenium-webdriver/http';
import { UserModel } from '@app/models';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private service: AppAuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.isLoggedIn()) {
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

        if (event instanceof HttpRequest) {

        }
      })
    );
  }
}
