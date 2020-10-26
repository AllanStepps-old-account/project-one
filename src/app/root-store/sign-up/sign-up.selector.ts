import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import {State} from './sign-up.state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

export const selectSignUpState: MemoizedSelector<object, State> = createFeatureSelector<State>('auth');

export const selectSignUpError: MemoizedSelector<object, any> = createSelector(
  selectSignUpState,
  getError,
);

export const selectSignUpIsLoading: MemoizedSelector<object, boolean> = createSelector(
  selectSignUpState,
  getIsLoading,
);

