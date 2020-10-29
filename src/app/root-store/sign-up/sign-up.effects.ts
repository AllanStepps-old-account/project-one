import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {ActionTypes, SignUpFailureAction, SignUpRequestAction, SignUpSuccessAction,} from './sign-up.actions';
import {UserService} from '../../services/user.service';
import {LoginDryRequestAction} from '../login/login.actions';

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
  signUpSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpSuccessAction>(ActionTypes.SIGN_UP_SUCCESS),
    map(() => new LoginDryRequestAction()),
  );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
