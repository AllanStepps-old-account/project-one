import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from './items.state';
import {selectRouteParams} from '../router/router.selector';
import {Item} from '../../models/item.model';

export const selectAllItems: MemoizedSelector<object, State> = createFeatureSelector<State>('items');

export const selectSelectedItems: MemoizedSelector<object, Item[]> = createSelector(
  selectAllItems,
  selectRouteParams,
  (items, params) => items[params.id]
);

