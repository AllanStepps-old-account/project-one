import {RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router/router.serializer';

export interface RootState {
  routerReducer: RouterReducerState<RouterStateUrl>;
}
