import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {List} from '../../models/list.model';

export const featureAdapter: EntityAdapter<List> = createEntityAdapter<List>({
  selectId: model => model.id,
  sortComparer: (a: List, b: List): number =>
    parseInt(b.id) - parseInt(a.id)
});

export interface State extends EntityState<List> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState(
  {
    isLoading: false,
    error: null
  }
);
