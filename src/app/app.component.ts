import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginFailureAction, LoginRequestAction, LoginSuccessAction, LogoutAction} from './root-store/login/login.actions';
import {selectIsAuth} from './root-store/login/login.selector';
import {take} from 'rxjs/operators';
import {User} from './models/user.model';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
}
