import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'https://localhost:44346/';
    const reqUrl = req.url;
    req = req.clone({
      url: reqUrl.startsWith('!') ? reqUrl.substr(1) : url + reqUrl
    });

    return next.handle(req);
  }
}
