import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ItemService} from '../../services/item.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {
  ActionTypes,
  ItemCreateFailureAction,
  ItemCreateRequestAction,
  ItemCreateSuccessAction, ItemDeleteFailureAction, ItemDeleteRequestAction, ItemDeleteSuccessAction,
  ItemLoadFailureAction,
  ItemLoadRequestAction,
  ItemLoadSuccessAction,
  ItemUpdateFailureAction,
  ItemUpdateRequestAction,
  ItemUpdateSuccessAction
} from './items.actions';
import {LoginRequestAction} from '../login/login.actions';
import {SnackBarService} from '../../services/snack-bar/snack-bar.service';
import {Router} from '@angular/router';

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
  itemDeleteEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemDeleteRequestAction>(ActionTypes.ITEM_DELETE_REQUEST),
    map((action) => action.payload),
    mergeMap(({item}) => this.itemService.removeItem(item.id).pipe(
      map(() => new ItemDeleteSuccessAction({item})),
      catchError((error) => of(new ItemDeleteFailureAction({error}))),
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

  @Effect({dispatch: false})
  ItemCreateFailureEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ItemCreateFailureAction>(ActionTypes.ITEM_CREATE_FAILURE),
    tap(() => this.snackBarService.pleaseRefresh()),
  );

  constructor(private itemService: ItemService,
              private actions$: Actions,
              private snackBarService: SnackBarService) {
  }
}
