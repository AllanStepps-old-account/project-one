import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ItemService} from '../../services/item.service';
import {interval, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, debounceTime, map, mergeMap, scan, switchMap, takeWhile, withLatestFrom} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {
  ActionTypes,
  ItemBulkUpdateFailureAction,
  ItemBulkUpdateRequestAction,
  ItemBulkUpdateSuccessAction,
  ItemCreateAction,
  ItemCreatedAction,
  ItemEditAction,
  ItemGetAllAction,
  ItemGetAllSuccessAction
} from './items.actions';
import {Update} from '@ngrx/entity';

@Injectable()
export default class ItemsEffects {

  @Effect()
  itemCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemCreateAction>(ActionTypes.ITEM_CREATE),
    map((action) => action.payload),
    mergeMap(({item, listId}) => this.itemService.createItem(item, listId).pipe(
      map((item: Item) => new ItemCreatedAction({item, listId})),
      // catchError((error) => observableOf(new LoginFailureAction({error}))),
    ))
  );

  @Effect()
  itemGetAllEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemGetAllAction>(ActionTypes.ITEM_GET_ALL),
    mergeMap((action) => this.itemService.getItems().pipe(
      map((items: Item[]) => new ItemGetAllSuccessAction({items})),
      // catchError((error) => observableOf(new LoginFailureAction({error}))),
    ))
  );

  @Effect()
  itemEditEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemEditAction>(ActionTypes.ITEM_EDIT),
    map((action) => action.payload),
    // scan((acc, {item}) => ({...acc, [item.id]: item}), {}),
    // debounceTime(1000),
    map((items) => Object.values(items)),
    map((items: Update<Item>[]) => new ItemBulkUpdateRequestAction({items}))
  );

  @Effect()
  itemBulkUpdateRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemBulkUpdateRequestAction>(ActionTypes.ITEM_BULK_UPDATE_REQUEST),
    map((action) => action.payload),
    mergeMap(({items}) => this.itemService.sendUpdates(items).pipe(
      map((items: Item[]) => new ItemBulkUpdateSuccessAction({items})),
      catchError((error) => of(new ItemBulkUpdateFailureAction({error}))),
    ))
  );

  constructor(private itemService: ItemService,
              private actions$: Actions) {
  }
}
