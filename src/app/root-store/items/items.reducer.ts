import {Actions, ActionTypes} from './items.actions';
import {featureAdapter, initialState, State} from './items.state';

export const itemsFeatureName = 'items';

export function itemsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ITEM_LOAD_REQUEST:
    case ActionTypes.ITEM_CREATE_REQUEST:
    case ActionTypes.ITEM_UPDATE_REQUEST:
    case ActionTypes.ITEM_DELETE_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case ActionTypes.ITEM_LOAD_FAILURE:
    case ActionTypes.ITEM_CREATE_FAILURE:
    case ActionTypes.ITEM_UPDATE_FAILURE:
    case ActionTypes.ITEM_DELETE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ActionTypes.ITEM_CREATE_SUCCESS:
      if (action.payload.items) {
        return featureAdapter.addMany(action.payload.items, {
          ...state,
          isLoading: false,
          error: null
        });
      }

      return featureAdapter.addOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_UPDATE_SUCCESS:
      return featureAdapter.upsertOne(action.payload.item, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_DELETE_SUCCESS:
      return featureAdapter.removeOne(action.payload.item.id, {
        ...state,
        isLoading: false,
        error: null
      });
    case ActionTypes.ITEM_LOAD_SUCCESS:
      return featureAdapter.setAll(action.payload.items, {
        ...state,
        isLoading: false,
        error: null
      });
    default: {
      return state;
    }
  }
}
