import { Actions, ActionTypes } from './login.actions';
import { initialState, State } from './login.state';

export function loginReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user, // @todo check that, why it's not encapsulated.
        error: null,
        isLoading: false,
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
}
