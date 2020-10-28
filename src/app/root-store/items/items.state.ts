import {Item} from '../../models/item.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

// export interface State {
//   [listId: string]: Item[];
// }
//
// export const initialState: State = {};

export const featureAdapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: model => model.id,
  sortComparer: (a: Item, b: Item): number =>
    b.id.toString().localeCompare(a.id)
});

export interface State extends EntityState<Item> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
