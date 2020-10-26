import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, delay, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {ActionTypes, LoginFailureAction, LoginRequestAction, LoginSuccessAction,} from './login.actions';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Injectable()
export default class LoginEffects {

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoginRequestAction>(ActionTypes.LOGIN_REQUEST),
    map((action) => action.payload),
    mergeMap(({email, password}) => this.userService
      .login(email, password)
      .pipe(
        map((user: User) => new LoginSuccessAction({user})),
        catchError((error) => observableOf(new LoginFailureAction({error}))),
      )),
  );

  @Effect({dispatch: false})
  loginInSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<LoginRequestAction>(ActionTypes.LOGIN_SUCCESS),
    tap( () => this.router.navigate(['/dashboard']) )
  );

  @Effect({dispatch: false})
  logout$: Observable<Action> = this.actions$.pipe(
    ofType<LoginRequestAction>(ActionTypes.LOGOUT),
    tap( () => this.router.navigate(['/landing']) )
  );

  constructor(private userService: UserService, private actions$: Actions, private router: Router) {
  }
}
