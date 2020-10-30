import {List} from './list.model';

export interface Item {
  id: string;
  listId: List['id'],
  action: string;
  done: boolean;
}
