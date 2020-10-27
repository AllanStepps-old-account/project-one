import {User} from './user.model';

export interface List {
  id: string;
  name: string;
  userId: User['id'];
}
