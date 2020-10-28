import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from './items.state';
import {selectRouteParams} from '../router/router.selector';
import {featureAdapter} from './items.state';
import {Item} from '../../models/item.model';

export const getError = (state: State): any => state.error;

export const getIsLoading = (state: State): boolean => state.isLoading;

export const selectItemsState: MemoizedSelector<object, State> = createFeatureSelector<State>('items');

export const selectAllItems: (state: State) => Item[] = featureAdapter.getSelectors(selectItemsState).selectAll;

export const selectSelectedItems: MemoizedSelector<object, Item[]> = createSelector(
  selectAllItems,
  selectRouteParams,
  (items, params) => items.filter(item => item.listId == params.id)
);

export const selectItemError: MemoizedSelector<object, any> = createSelector(selectItemsState, getError);

export const selectItemIsLoading: MemoizedSelector<object, boolean> = createSelector(selectItemsState, getIsLoading);
