import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from './lists.state';
import {selectRouteParams} from '../router/router.selector';
import {List} from '../../models/list.model';

export const selectAllLists: MemoizedSelector<object, State> = createFeatureSelector<State>('lists');

export const selectSelectedList: MemoizedSelector<object, List> = createSelector(
  selectAllLists,
  selectRouteParams,
  (lists, params) => lists[params.id]
);
