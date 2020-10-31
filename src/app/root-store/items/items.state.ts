import {Item} from '../../models/item.model';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const featureAdapter: EntityAdapter<Item> = createEntityAdapter<Item>({
  selectId: item => item.id,
  sortComparer: (a: Item, b: Item): number =>
    parseInt(b.id) - parseInt(a.id)
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
