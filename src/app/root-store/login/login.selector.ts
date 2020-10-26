import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import {State} from './login.state';
import {User} from '../../models/user.model';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

const getIsAuth = (state: State): boolean => !!state.user;

export const selectLoginState: MemoizedSelector<object, State> = createFeatureSelector<State>('auth');

export const selectLoginError: MemoizedSelector<object, any> = createSelector(
  selectLoginState,
  getError,
);

export const selectLoginIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectLoginState,
  getIsLoading,
);

export const selectLoginUser: MemoizedSelector<object, User> = createSelector(
  selectLoginState,
  getUser,
);

export const selectIsAuth: MemoizedSelector<object, boolean> = createSelector(
  selectLoginState,
  getIsAuth,
);
