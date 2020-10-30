import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {LoginRequestAction, LogoutAction} from './root-store/login/login.actions';
import {selectIsAuth} from './root-store/login/login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuthenticated$ = this.store.select(selectIsAuth);

  constructor(private store: Store) {
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
