import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '../../services/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {
  ActionTypes,
  ListCreateFailureAction,
  ListCreateRequestAction,
  ListCreateSuccessAction,
  ListLoadFailureAction,
  ListLoadRequestAction,
  ListLoadSuccessAction, ListUpdateFailureAction, ListUpdateRequestAction, ListUpdateSuccessAction
} from './lists.actions';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';
import {ItemCreateFailureAction, ItemCreateSuccessAction} from '../items/items.actions';
import {Router} from '@angular/router';

@Injectable()
export default class ListsEffects {

  @Effect()
  listCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ListCreateRequestAction>(ActionTypes.LIST_CREATE_REQUEST),
    map((action) => action.payload),
    mergeMap(({list, items}) => this.listService.createList(list).pipe(
      map((list: List) => new ListCreateSuccessAction({list, items})),
      catchError((error) => of(new ListCreateFailureAction({error}))),
    ))
  );

  @Effect()
  listUpdateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ListUpdateRequestAction>(ActionTypes.LIST_UPDATE_REQUEST),
    map((action) => action.payload),
    mergeMap(({list}) => this.listService.update(list).pipe(
      map((list: List) => new ListUpdateSuccessAction({list})),
      catchError((error) => of(new ListUpdateFailureAction({error}))),
    ))
  );


  @Effect()
  listCreateSuccessEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ListCreateSuccessAction>(ActionTypes.LIST_CREATE_SUCCESS),
    map((action) => action.payload),
    mergeMap(({items, list}) => {
      if (items) {
        items = this.itemService.prepareItems(items, list.id);
        return this.itemService.createItems(items).pipe(
          map((items: Item[]) => new ItemCreateSuccessAction({items})),
          tap(() => this.router.navigate(['list', list.id])),
          catchError((error) => of(new ItemCreateFailureAction({error}))),
        );
      }
    })
  );

  @Effect()
  listLoadEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ListLoadRequestAction>(ActionTypes.LIST_LOAD_REQUEST),
    mergeMap(() => this.listService.getLists().pipe(
      map((lists: List[]) => new ListLoadSuccessAction({lists})),
      catchError((error) => of(new ListLoadFailureAction({error}))),
    ))
  );

  constructor(private listService: ListService,
              private itemService: ItemService,
              private router: Router,
              private actions$: Actions) {
  }
}
