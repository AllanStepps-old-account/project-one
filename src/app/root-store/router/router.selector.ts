import {createFeatureSelector, createSelector, MemoizedSelector,} from '@ngrx/store';
import {getSelectors, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router.serializer';
import {Params} from '@angular/router';

interface RouterState extends RouterReducerState<RouterStateUrl> {
}

export const routerFeatureName = 'routerReducer';

const getParams = ({state}: RouterState): Params => state.params;

const getQueryParams = ({state}: RouterState): Params => state.queryParams;

export const selectRouterState: MemoizedSelector<object, RouterState> = createFeatureSelector<RouterState>(routerFeatureName);

export const selectRouteParams: MemoizedSelector<object, any> = createSelector(
  selectRouterState,
  getParams,
);

export const selectRouteQueryParams: MemoizedSelector<object, any> = createSelector(
  selectRouterState,
  getQueryParams,
);

// export const {
//   selectCurrentRoute, // select the current route
//   selectFragment, // select the current route fragment
//   selectQueryParams, // select the current route query params
//   selectQueryParam, // factory function to select a query param
//   // selectRouteParams, // select the current route params
//   selectRouteParam, // factory function to select a route param
//   selectRouteData, // select the current route data
//   selectUrl // select the current url
// } = getSelectors(selectRouterState);
