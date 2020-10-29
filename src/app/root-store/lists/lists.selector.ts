import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {featureAdapter, State} from './lists.state';
import {List} from '../../models/list.model';
import {selectRouteParams} from '../router/router.selector';
import {listsFeatureName} from './lists.reducer';
import {selectUserId} from '../login/login.selector';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectListState: MemoizedSelector<object, State> = createFeatureSelector<State>(listsFeatureName);

export const selectAllLists: (state: State) => List[] = featureAdapter.getSelectors(selectListState).selectAll;

export const selectAllListsFromUser: (state: State) => List[] = createSelector(
  selectAllLists,
  selectUserId,
  (lists, userId) => lists.filter(list => list.userId == userId)
);

export const selectSelectedList: MemoizedSelector<object, List> = createSelector(
  selectAllLists,
  selectRouteParams,
  (lists, params) => lists.find(list => list.id == params.id)
);

export const selectSelectedListName: MemoizedSelector<object, string> = createSelector(
  selectSelectedList,
  (list) => list?.name
);

export const selectListError: MemoizedSelector<object, any> = createSelector(
  selectListState,
  getError
);

export const selectListIsLoading: MemoizedSelector<object,
  boolean> = createSelector(selectListState, getIsLoading);
