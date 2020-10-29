import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginFailureAction, LoginRequestAction, LoginSuccessAction, LogoutAction} from './root-store/login/login.actions';
import {selectIsAuth} from './root-store/login/login.selector';
import {take} from 'rxjs/operators';
import {User} from './models/user.model';
import {UserService} from './services/user.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {host} from '@angular-devkit/build-angular/src/test-utils';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './app-routing.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation,
    trigger(
      'toolbarAnimation',
      [
        transition(
          ':enter',
          [
            style({top: -100}),
            animate('1s ease-out', style({top: 0}))
          ]
        ),
        transition(
          ':leave',
          [
            animate('1s ease-in',
              style({top: -100}))
          ]
        )
      ]
    )],
})
export class AppComponent {
  title = 'app';

  isAuthenticated$ = this.store.select(selectIsAuth);

  constructor(private store: Store, private userService: UserService) {
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  login() {
    this.store.dispatch(new LoginRequestAction({
      email: 'allanstepps@gmail.com',
      password: 'myPassword'
    }));
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
