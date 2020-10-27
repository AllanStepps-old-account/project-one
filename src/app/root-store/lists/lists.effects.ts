import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {SnackBarService} from '../../services/snack-bar/snack-bar.service';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {map, mergeMap} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {ActionTypes, ListCreateAction, ListCreatedAction, ListGetAllSuccessAction} from './lists.actions';

@Injectable()
export default class ListsEffects {

  @Effect()
  listCreateEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LIST_CREATE),
    mergeMap((action: ListCreateAction) => this.listService.createList(action.payload.list).pipe(
      map((list: List) => new ListCreatedAction({list})),
      // catchError((error) => observableOf(new LoginFailureAction({error}))),
    ))
  );

  @Effect()
  listGetAllEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ActionTypes.LIST_GET_ALL),
    mergeMap((action: ListCreateAction) => this.listService.getLists().pipe(
      map((lists: List[]) => new ListGetAllSuccessAction({lists})),
      // catchError((error) => observableOf(new LoginFailureAction({error}))),
    ))
  );

  ListGetAllAction;

  constructor(private listService: ListService,
              private actions$: Actions,
              private router: Router,
              private snackBarService: SnackBarService) {
  }
}
