import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  ActionTypes as signUpActionTypes,
  ActionTypes,
  SignUpFailureAction,
  SignUpRequestAction,
  SignUpSuccessAction, SignUpUpdateRequestAction,
  SignUpUpdateSuccessAction,
} from './sign-up.actions';
import {UserService} from '../../services/user.service';
import {LoginFailureAction, LoginSuccessAction} from '../login/login.actions';
import {User} from '../../models/user.model';

@Injectable()
export default class SignUpEffects {

  @Effect()
  signUpRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpRequestAction>(ActionTypes.SIGN_UP_REQUEST),
    switchMap((action) => this.userService
      .signUp(action.payload.user)
      .pipe(
        map(({accessToken}) => new SignUpSuccessAction({accessToken})),
        catchError((error) => observableOf(new SignUpFailureAction({error}))),
      ))
  );

  @Effect()
  signUpUpdateRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpUpdateRequestAction>(ActionTypes.SIGN_UP_UPDATE_REQUEST),
    switchMap((action) => this.userService.update(action.payload.user).pipe(
      map((user) => new SignUpUpdateSuccessAction()),
      catchError((error) => observableOf(new SignUpFailureAction({error}))),
    ))
  );

  /**
   * This effect is a side-effect of using json-server-auth since the user id creation
   * send back a jwt token (unverified but that's for the project)
   */
  @Effect()
  signUpSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpSuccessAction>(signUpActionTypes.SIGN_UP_SUCCESS, signUpActionTypes.SIGN_UP_UPDATE_SUCCESS),
    map((action) => action.payload?.accessToken && this.userService.setAccessToken(action.payload.accessToken)),
    switchMap(() => this.userService.loginFromStorage()
      .pipe(
        map((user: User) => new LoginSuccessAction({user})),
        catchError((error) => observableOf(new LoginFailureAction({error}))),
      ))
  );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
