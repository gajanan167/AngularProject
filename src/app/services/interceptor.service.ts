import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token;
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = " ";
    if (sessionStorage.currentToken != null) {
      this.token = sessionStorage.getItem("currentToken");
    }
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer" + this.token
      }
    });
    return next.handle(request);
  }

}

