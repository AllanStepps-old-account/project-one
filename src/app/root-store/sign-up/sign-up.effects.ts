import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, concatMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {
  ActionTypes,
  SignUpFailureAction, SignUpRequestAction,
  SignUpSuccessAction,
} from './sign-up.actions';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';
import {LoginRequestAction} from '../login/login.actions';

@Injectable()
export default class SignUpEffects {

  @Effect()
  signUpRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpRequestAction>(
      ActionTypes.SIGN_UP_REQUEST,
    ),
    switchMap((action) => this.userService
      .signUp(action.payload.user)
      .pipe(
        map(
          (user: User) => new SignUpSuccessAction({
            user
          }),
        ),
        catchError((error) => observableOf(new SignUpFailureAction({error}))),
      )),
  );

  @Effect()
  signUpSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<SignUpSuccessAction>(ActionTypes.SIGN_UP_SUCCESS),
    map((action) => action.payload.user),
    mergeMap(({email, password}: User) => observableOf(new LoginRequestAction({email, password})))
  );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
