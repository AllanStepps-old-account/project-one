import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {featureAdapter, State} from './items.state';
import {selectRouteParams} from '../router/router.selector';
import {Item} from '../../models/item.model';
import {itemsFeatureName} from './items.reducer';
import {selectAllLists} from '../lists/lists.selector';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectItemsState: MemoizedSelector<object, State> = createFeatureSelector<State>(itemsFeatureName);

export const selectAllItems: (state: State) => Item[] = featureAdapter.getSelectors(selectItemsState).selectAll;

export const selectSelectedItems: MemoizedSelector<object, Item[]> = createSelector(
  selectAllItems,
  selectRouteParams,
  (items, params) => items.filter(item => item.listId == params.id)
);

export const selectItemError: MemoizedSelector<object, any> = createSelector(selectItemsState, getError);

export const selectItemIsLoading: MemoizedSelector<object, boolean> = createSelector(selectItemsState, getIsLoading);
