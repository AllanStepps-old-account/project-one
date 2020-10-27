import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler) {
    const { accessToken }  = this.userService;
    httpRequest = httpRequest.clone({
      setHeaders: {
        Authorization: 'Bearer ' + accessToken
      }
    });
    return next.handle(httpRequest);
  }
}
