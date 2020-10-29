import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum ActionTypes {
  LOGIN_REQUEST = '[Login] Request',
  LOGIN_DRY_REQUEST = '[Login] Dry Login Request',
  LOGIN_FAILURE = '[Login] Failure',
  LOGIN_SUCCESS = '[Login] Success',
  LOGOUT = '[Login] Logout',
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;

  constructor(public payload: { email: string; password: string }) {
  }
}

export class LoginDryRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_DRY_REQUEST;

}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { user: User }) {
  }
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LOGOUT;

}

export type Actions =
  | LoginRequestAction
  | LoginDryRequestAction
  | LoginFailureAction
  | LoginSuccessAction
  | LogoutAction
  ;
