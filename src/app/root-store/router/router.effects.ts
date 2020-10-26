import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of as observableOf} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Injectable()
export default class RouterEffects {

  // @Effect()
  // loginRequestEffect$: Observable<Action> = this.actions$.pipe(
  //   ofType<LoginRequestAction>(
  //     ActionTypes.LOGIN_REQUEST,
  //   ),
  //   switchMap((action) => this.userService
  //     .login(action.payload.email, action.payload.password)
  //     .pipe(
  //       map(
  //         (user: User) => new LoginSuccessAction({
  //           user
  //         }),
  //       ),
  //       catchError((error) => observableOf(new LoginFailureAction({error}))),
  //     )),
  // );

  constructor(private userService: UserService, private actions$: Actions) {
  }
}
