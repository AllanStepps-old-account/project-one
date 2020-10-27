import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router/router.serializer';
import {ActionReducerMap} from '@ngrx/store';

export interface RootState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}

export const rootReducers: ActionReducerMap<RootState> = {
  routerReducer,
};
