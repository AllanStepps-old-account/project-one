import {Action} from '@ngrx/store';
import {List} from '../../models/list.model';

export enum ActionTypes {
  LIST_CREATE = '[List] Create New List',
  LIST_CREATED = '[List] New List Created',
  LIST_EDIT = '[List] Edit Existing List',
  LIST_DELETE = '[List] Delete Existing List',
  LIST_GET_ALL = '[LIST] Get All',
  LIST_GET_ALL_SUCCESS = '[LIST] Get All Success',
}

export class ListCreateAction implements Action {
  readonly type = ActionTypes.LIST_CREATE;

  constructor(public payload: { list: List }) {
  }
}

export class ListCreatedAction implements Action {
  readonly type = ActionTypes.LIST_CREATED;

  constructor(public payload: { list: List }) {
  }
}

export class ListEditAction implements Action {
  readonly type = ActionTypes.LIST_EDIT;

  constructor(public payload: { list: List }) {
  }
}

export class ListDeleteAction implements Action {
  readonly type = ActionTypes.LIST_DELETE;

  constructor(public payload: { list: List }) {
  }
}

export class ListGetAllAction implements Action {
  readonly type = ActionTypes.LIST_GET_ALL;

  constructor() {
  }
}


export class ListGetAllSuccessAction implements Action {
  readonly type = ActionTypes.LIST_GET_ALL_SUCCESS;

  constructor(public payload: { lists: List[] }) {
  }
}

export type Actions =
  | ListCreateAction
  | ListCreatedAction
  | ListEditAction
  | ListDeleteAction
  | ListGetAllAction
  | ListGetAllSuccessAction
  ;
