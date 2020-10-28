import {Actions, ActionTypes} from './lists.actions';
import {featureAdapter, initialState, State} from './lists.state';

export function listsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LIST_CREATE_REQUEST:
    case ActionTypes.LIST_UPDATE_REQUEST:
    case ActionTypes.LIST_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.LIST_CREATE_FAILURE:
    case ActionTypes.LIST_UPDATE_FAILURE:
    case ActionTypes.LIST_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ActionTypes.LIST_CREATE_SUCCESS:
    case ActionTypes.LIST_UPDATE_SUCCESS:
      return featureAdapter.addOne(action.payload.list, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.LIST_LOAD_SUCCESS:
      return featureAdapter.setAll(action.payload.lists, {
        ...state,
        isLoading: false,
        error: null
      });
    default: {
      return state;
    }
  }
}
