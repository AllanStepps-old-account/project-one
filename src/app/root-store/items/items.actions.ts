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


  ITEM_SEND_EDITS = '[Item] Send Edits',


  ITEM_BULK_UPDATE_REQUEST = '[Item] Bulk Update Request',
  ITEM_BULK_UPDATE_SUCCESS = '[Item] Bulk Update Success',
  ITEM_BULK_UPDATE_FAILURE = '[Item] Bulk Update Failure',
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

export class ItemSendEditsAction implements Action {
  readonly type = ActionTypes.ITEM_SEND_EDITS;

  constructor(public payload: { items: { [id: string]: Update<Item> } }) {
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

export class ItemBulkUpdateRequestAction implements Action {
  readonly type = ActionTypes.ITEM_BULK_UPDATE_REQUEST;

  constructor(public payload: { items: Update<Item>[] }) {
  }
}

export class ItemBulkUpdateSuccessAction implements Action {
  readonly type = ActionTypes.ITEM_BULK_UPDATE_SUCCESS;

  constructor(public payload: { items: Item[] }) {
  }
}

export class ItemBulkUpdateFailureAction implements Action {
  readonly type = ActionTypes.ITEM_BULK_UPDATE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}


export type Actions =
  | ItemCreateAction
  | ItemCreatedAction
  | ItemEditAction
  | ItemDeleteAction
  | ItemGetAllAction
  | ItemGetAllSuccessAction
  | ItemBulkUpdateRequestAction
  | ItemBulkUpdateSuccessAction
  | ItemBulkUpdateFailureAction
  ;
