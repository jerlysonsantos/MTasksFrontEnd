import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('@api-public')) {
      req = req.clone({
        url: req.url.replace('@api-public', environment.apiPublic),
        setHeaders: this.getOptions(req),
        withCredentials: true,
      });
    }

    if (req.url.includes('@api')) {
      req = req.clone({
        url: req.url.replace('@api', environment.api),
        setHeaders: this.getOptions(req),
        withCredentials: true,
      });
    }

    return next.handle(req);
  }

  getOptions(_: any): { [header: string]: string } {
    return {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    };
  }
}
