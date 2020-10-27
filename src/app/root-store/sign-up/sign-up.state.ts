import { User } from '../../models/user.model';

export interface State {
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  isLoading: false,
  error: null,
};
