import {Action} from '@ngrx/store';
import {Item} from '../../models/item.model';
import {Update} from '@ngrx/entity';

export enum ActionTypes {
  ITEM_CREATE = '[Item] Create New Item',
  ITEM_CREATED = '[Item] New Item Created',
  ITEM_EDIT = '[Item] Edit Existing Item',
  ITEM_DELETE = '[Item] Delete Existing Item',
  ITEM_GET_ALL = '[ITEM] Get All',
  ITEM_GET_ALL_SUCCESS = '[ITEM] Get All Success',
}

export class ItemCreateAction implements Action {
  readonly type = ActionTypes.ITEM_CREATE;

  constructor(public payload: { item: Item, listId: string }) {
  }
}

export class ItemCreatedAction implements Action {
  readonly type = ActionTypes.ITEM_CREATED;

  constructor(public payload: { item: Item, listId: string }) {
  }
}

export class ItemEditAction implements Action {
  readonly type = ActionTypes.ITEM_EDIT;

  constructor(public payload: { item: Update<Item> }) {
  }
}

export class ItemDeleteAction implements Action {
  readonly type = ActionTypes.ITEM_DELETE;

  constructor(public payload: { item: Item, listId: string }) {
  }
}

export class ItemGetAllAction implements Action {
  readonly type = ActionTypes.ITEM_GET_ALL;

  constructor() {
  }
}


export class ItemGetAllSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_GET_ALL_SUCCESS;

  constructor(public payload: { items: Item[] }) {
  }
}

export type Actions =
  | ItemCreateAction
  | ItemCreatedAction
  | ItemEditAction
  | ItemDeleteAction
  | ItemGetAllAction
  | ItemGetAllSuccessAction
  ;
