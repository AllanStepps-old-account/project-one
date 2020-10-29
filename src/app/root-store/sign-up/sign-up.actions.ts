import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

export enum ActionTypes {
  SIGN_UP_REQUEST = '[Sign-Up] Sign-Up Request',
  SIGN_UP_FAILURE = '[Sign-Up] Sign-Up Failure',
  SIGN_UP_SUCCESS = '[Sign-Up] Sign-Up Success',
}

export class SignUpRequestAction implements Action {
  readonly type = ActionTypes.SIGN_UP_REQUEST;

  constructor(public payload: { user: User }) {
  }
}

export class SignUpFailureAction implements Action {
  readonly type = ActionTypes.SIGN_UP_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class SignUpSuccessAction implements Action {
  readonly type = ActionTypes.SIGN_UP_SUCCESS;

  constructor(public payload: { accessToken: string }) {
  }
}

export type Actions =
  | SignUpRequestAction
  | SignUpFailureAction
  | SignUpSuccessAction;
