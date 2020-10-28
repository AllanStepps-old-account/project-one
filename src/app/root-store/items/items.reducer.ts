import {Actions, ActionTypes} from './items.actions';
import {featureAdapter, initialState, State} from './items.state';

export function itemsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ITEM_CREATED:
      return featureAdapter.addOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_EDIT:
      return featureAdapter.updateOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_GET_ALL_SUCCESS:
      return featureAdapter.setAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_CREATE:
    default: {
      return state;
    }
  }
}
