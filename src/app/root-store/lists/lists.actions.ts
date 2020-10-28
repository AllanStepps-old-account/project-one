import {Action} from '@ngrx/store';
import {List} from '../../models/list.model';

export enum ActionTypes {
  LIST_LOAD_REQUEST = '[List] Load Request',
  LIST_LOAD_SUCCESS = '[List] Load Success',
  LIST_LOAD_FAILURE = '[List] Load Failure',

  LIST_CREATE_REQUEST = '[List] Create Request',
  LIST_CREATE_SUCCESS = '[List] Create Success',
  LIST_CREATE_FAILURE = '[List] Create Failure',

  LIST_UPDATE_REQUEST = '[List] Update Request',
  LIST_UPDATE_SUCCESS = '[List] Update Success',
  LIST_UPDATE_FAILURE = '[List] Update Failure',
}

export class ListLoadRequestAction implements Action {
  readonly type = ActionTypes.LIST_LOAD_REQUEST;
}

export class ListLoadSuccessAction implements Action {
  readonly type = ActionTypes.LIST_LOAD_SUCCESS;

  constructor(public payload: { lists: List[] }) {
  }
}

export class ListLoadFailureAction implements Action {
  readonly type = ActionTypes.LIST_LOAD_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class ListCreateRequestAction implements Action {
  readonly type = ActionTypes.LIST_CREATE_REQUEST;

  constructor(public payload: { list: List }) {
  }
}

export class ListCreateSuccessAction implements Action {
  readonly type = ActionTypes.LIST_CREATE_SUCCESS;

  constructor(public payload: { list: List }) {
  }
}

export class ListCreateFailureAction implements Action {
  readonly type = ActionTypes.LIST_CREATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class ListUpdateRequestAction implements Action {
  readonly type = ActionTypes.LIST_UPDATE_REQUEST;
}

export class ListUpdateSuccessAction implements Action {
  readonly type = ActionTypes.LIST_UPDATE_SUCCESS;

  constructor(public payload: { list: List }) {
  }
}

export class ListUpdateFailureAction implements Action {
  readonly type = ActionTypes.LIST_UPDATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export type Actions =
  | ListLoadRequestAction
  | ListLoadSuccessAction
  | ListLoadFailureAction
  | ListCreateRequestAction
  | ListCreateSuccessAction
  | ListCreateFailureAction
  | ListUpdateRequestAction
  | ListUpdateSuccessAction
  | ListUpdateFailureAction
  ;
