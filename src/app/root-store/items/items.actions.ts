import {Action} from '@ngrx/store';
import {Item} from '../../models/item.model';
import {Update} from '@ngrx/entity';

export enum ActionTypes {
  ITEM_LOAD_REQUEST = '[Item] Load Request',
  ITEM_LOAD_SUCCESS = '[Item] Load Success',
  ITEM_LOAD_FAILURE = '[Item] Load Failure',

  ITEM_CREATE_REQUEST = '[Item] Create Request',
  ITEM_CREATE_SUCCESS = '[Item] Create Success',
  ITEM_CREATE_FAILURE = '[Item] Create Failure',

  ITEM_UPDATE_REQUEST = '[Item] Update Request',
  ITEM_UPDATE_SUCCESS = '[Item] Update Success',
  ITEM_UPDATE_FAILURE = '[Item] Update Failure',
}

export class ItemLoadRequestAction implements Action {
  readonly type = ActionTypes.ITEM_LOAD_REQUEST;
}

export class ItemLoadSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_LOAD_SUCCESS;

  constructor(public payload: { items: Item[] }) {
  }
}

export class ItemLoadFailureAction implements Action {
  readonly type = ActionTypes.ITEM_LOAD_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class ItemCreateRequestAction implements Action {
  readonly type = ActionTypes.ITEM_CREATE_REQUEST;

  constructor(public payload: { item: Item, listId: string }) {
  }
}

export class ItemCreateSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_CREATE_SUCCESS;

  constructor(public payload: { item?: Item, items?: Item[] }) {
  }
}

export class ItemCreateFailureAction implements Action {
  readonly type = ActionTypes.ITEM_CREATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export class ItemUpdateRequestAction implements Action {
  readonly type = ActionTypes.ITEM_UPDATE_REQUEST;

  constructor(public payload: { item: Update<Item> }) {
  }
}

export class ItemUpdateSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_UPDATE_SUCCESS;

  constructor(public payload: { item: Item }) {
  }
}

export class ItemUpdateFailureAction implements Action {
  readonly type = ActionTypes.ITEM_UPDATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}

export type Actions =
  | ItemLoadRequestAction
  | ItemLoadSuccessAction
  | ItemLoadFailureAction
  | ItemCreateRequestAction
  | ItemCreateSuccessAction
  | ItemCreateFailureAction
  | ItemUpdateRequestAction
  | ItemUpdateSuccessAction
  | ItemUpdateFailureAction
  ;
