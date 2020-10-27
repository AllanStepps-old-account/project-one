import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {SnackBarService} from '../../services/snack-bar/snack-bar.service';
import {ItemService} from '../../services/item.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mergeMap} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {ActionTypes, ItemCreateAction, ItemCreatedAction, ItemGetAllAction, ItemGetAllSuccessAction} from './items.actions';

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

  ItemGetAllAction;

  constructor(private itemService: ItemService,
              private actions$: Actions,
              private router: Router,
              private snackBarService: SnackBarService) {
  }
}
