import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ItemService} from '../../services/item.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {
  ActionTypes,
  ItemCreateFailureAction,
  ItemCreateRequestAction,
  ItemCreateSuccessAction,
  ItemLoadFailureAction,
  ItemLoadRequestAction,
  ItemLoadSuccessAction,
  ItemUpdateFailureAction,
  ItemUpdateRequestAction,
  ItemUpdateSuccessAction
} from './items.actions';

@Injectable()
export default class ItemsEffects {

  @Effect()
  itemCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemCreateRequestAction>(ActionTypes.ITEM_CREATE_REQUEST),
    map((action) => action.payload),
    mergeMap(({item, listId}) => this.itemService.createItem(item, listId).pipe(
      map((item: Item) => new ItemCreateSuccessAction({item})),
      catchError((error) => of(new ItemCreateFailureAction({error}))),
    ))
  );

  @Effect()
  itemLoadEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemLoadRequestAction>(ActionTypes.ITEM_LOAD_REQUEST),
    mergeMap(() => this.itemService.getItems().pipe(
      map((items: Item[]) => new ItemLoadSuccessAction({items})),
      catchError((error) => of(new ItemLoadFailureAction({error}))),
    ))
  );

  @Effect()
  itemUpdateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemUpdateRequestAction>(ActionTypes.ITEM_UPDATE_REQUEST),
    map((action) => action.payload),
    mergeMap(({item}) => this.itemService.update(item).pipe(
      map((item: Item) => new ItemUpdateSuccessAction({item})),
      catchError((error) => of(new ItemUpdateFailureAction({error}))),
    ))
  );

  constructor(private itemService: ItemService,
              private actions$: Actions) {
  }
}
