import {List} from '../../models/list.model';

export interface State {
  [id: string]: List;
}

export const initialState: State = {};
