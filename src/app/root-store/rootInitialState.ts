import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router/router.serializer';
import {ActionReducerMap} from '@ngrx/store';
import {routerFeatureName} from './router/router.selector';

export interface RootState {
  [routerFeatureName]: RouterReducerState<RouterStateUrl>;
}

export const rootReducers: ActionReducerMap<RootState> = {
  routerReducer,
};
