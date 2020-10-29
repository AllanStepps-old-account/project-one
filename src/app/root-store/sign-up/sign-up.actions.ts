import {Action} from '@ngrx/store';
import {User} from '../../models/user.model';

export enum ActionTypes {
  SIGN_UP_REQUEST = '[Sign-Up] Request',
  SIGN_UP_FAILURE = '[Sign-Up] Failure',
  SIGN_UP_SUCCESS = '[Sign-Up] Success',

  SIGN_UP_UPDATE = '[Sign-Up] Update',

  SIGN_UP_UPDATE_REQUEST = '[Sign-Up] Update Request',
  SIGN_UP_UPDATE_FAILURE = '[Sign-Up] Update Failure',
  SIGN_UP_UPDATE_SUCCESS = '[Sign-Up] Update Success',
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


export class SignUpUpdateRequestAction implements Action {
  readonly type = ActionTypes.SIGN_UP_UPDATE_REQUEST;

  constructor(public payload: { user: User }) {
  }
}

export class SignUpUpdateFailureAction implements Action {
  readonly type = ActionTypes.SIGN_UP_UPDATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class SignUpUpdateSuccessAction implements Action {
  readonly type = ActionTypes.SIGN_UP_UPDATE_SUCCESS;
}

export type Actions =
  | SignUpRequestAction
  | SignUpFailureAction
  | SignUpSuccessAction
  | SignUpUpdateRequestAction
  | SignUpUpdateFailureAction
  | SignUpUpdateSuccessAction
  ;
