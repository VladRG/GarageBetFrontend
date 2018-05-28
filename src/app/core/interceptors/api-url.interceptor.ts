import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://localhost:62367/';
    const reqUrl = req.url;
    req = req.clone({
      url: reqUrl.startsWith('!') ? reqUrl.substr(1) : url + reqUrl
    });

    return next.handle(req);
  }
}
