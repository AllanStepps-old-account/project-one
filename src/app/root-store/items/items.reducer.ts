import {Actions, ActionTypes} from './items.actions';
import {initialState, State} from './items.state';

export function itemsReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ITEM_CREATED:
      const {item} = action.payload;

      // hey, let's create a default list so it always exists.
      const {[item.listId]: concernedItems, ...otherItems} = {[item.listId]: [], ...state};

      return {
        ...otherItems,
        [item.listId]: [...concernedItems, item]
      };
    case ActionTypes.ITEM_EDIT:
      const {item: itemToUpdate} = action.payload;

      // hey, let's create a default list so it always exists.
      const {[itemToUpdate.listId]: concernedItems2, ...otherItems2} = state;

      return {
        ...otherItems2,
        [itemToUpdate.listId]: concernedItems2.map((item) => {
          if (item.id === itemToUpdate.id) {
            return {...item, ...itemToUpdate};
          }
          return item;
        })
      };
    case ActionTypes.ITEM_GET_ALL_SUCCESS:
      const {items} = action.payload;

      return {
        ...items.reduce(((acc, item) => ({...acc, [item.listId]: [...(acc[item.listId] ? acc[item.listId] : []), item]})), {})
      };
    case ActionTypes.ITEM_CREATE:
    default: {
      return state;
    }
  }
}
