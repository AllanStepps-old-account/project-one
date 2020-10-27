import {Injectable} from '@angular/core';
import {Actions, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {catchError, map, mergeMapTo, tap} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {Observable, of as observableOf} from 'rxjs';
import {ActionTypes, LoginDryRequestAction, LoginFailureAction, LoginRequestAction, LoginSuccessAction} from './login/login.actions';
import {Action} from '@ngrx/store';
import {User} from '../models/user.model';

@Injectable()
export default class RootEffects {

  @Effect()
  init$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map((user: User) => new LoginDryRequestAction()),
  );

  @Effect()
  loginDryRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<LoginRequestAction>(ActionTypes.LOGIN_DRY_REQUEST),
    tap(console.log),
    mergeMapTo(this.userService
      .drylogin()
      .pipe(
        map((user: User) => new LoginSuccessAction({user})),
        catchError((error) => observableOf(new LoginFailureAction({error}))),
      )),
  );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
