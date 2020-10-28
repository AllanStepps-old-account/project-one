import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ListService} from '../../services/list.service';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {
  ActionTypes,
  ListCreateFailureAction,
  ListCreateRequestAction,
  ListCreateSuccessAction,
  ListLoadFailureAction,
  ListLoadRequestAction,
  ListLoadSuccessAction
} from './lists.actions';

@Injectable()
export default class ListsEffects {

  @Effect()
  listCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType<ListCreateRequestAction>(ActionTypes.LIST_CREATE_REQUEST),
    mergeMap((action) => this.listService.createList(action.payload.list).pipe(
      map((list: List) => new ListCreateSuccessAction({list})),
      catchError((error) => of(new ListCreateFailureAction({error}))),
    ))
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
              private actions$: Actions) {
  }
}
