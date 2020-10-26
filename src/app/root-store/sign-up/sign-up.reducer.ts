import { Actions, ActionTypes } from './sign-up.actions';
import { initialState, State } from './sign-up.state';

export function signUpReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.SIGN_UP_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        isLoading: false,
      };
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
}
