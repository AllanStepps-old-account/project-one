import {Actions, ActionTypes} from './lists.actions';
import {initialState, State} from './lists.state';

export function listsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LIST_CREATED:
      const {list} = action.payload;

      return {
        ...state,
        [list.id]: list
      };
    case ActionTypes.LIST_EDIT:
      const updatedList = action.payload.list;
      const {[updatedList.id]: currentList, ...notEditedLists} = state;

      return {
        ...notEditedLists,
        [updatedList.id]: {...currentList, ...updatedList}
      };
    case ActionTypes.LIST_DELETE:
      const {[action.payload.list.id]: deletedList, ...notDeletedLists} = state;

      return {
        ...notDeletedLists
      };
    case ActionTypes.LIST_GET_ALL_SUCCESS:
      const { lists } = action.payload;

      return {
       ...lists.reduce(((acc, list) => ({...acc, [list.id]: list})), {})
      }
    case ActionTypes.LIST_CREATE:
    default: {
      return state;
    }
  }
}
