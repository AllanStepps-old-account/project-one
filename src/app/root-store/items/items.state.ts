import {Item} from '../../models/item.model';

export interface State {
  [listId: string]: Item[];
}

export const initialState: State = {};
