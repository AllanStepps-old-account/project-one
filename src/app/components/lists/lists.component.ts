import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllLists, selectAllListsFromUser, selectListIsLoading} from '../../root-store/lists/lists.selector';
import {map} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {combineLatest, Observable} from 'rxjs';
import {CreationMode} from '../list-create/list-create.component';
import {selectAllItems} from '../../root-store/items/items.selector';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  readonly creationMode = CreationMode;

  readonly selectAllItemsCountsByList$ = combineLatest([this.store.select(selectAllLists), this.store.select(selectAllItems)]).pipe(
    map(([lists, items]) => {
      const initialValues = lists.reduce((acc, list) => ({...acc, [list.id]: 0}), {});
      return items.reduce((acc, item) => ({...acc, [item.listId]: acc[item.listId] + 1}), initialValues);
    })
  );

  isLoading$: Observable<boolean> = this.store.select(selectListIsLoading);

  lists$: Observable<List[]> = this.store.select(selectAllListsFromUser).pipe(
    map(Object.values)
  );

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

}
