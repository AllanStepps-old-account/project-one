import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {selectSelectedList} from '../../root-store/lists/lists.selector';
import {selectSelectedItems} from '../../root-store/items/items.selector';
import {Item} from '../../models/item.model';
import {ItemEditAction} from '../../root-store/items/items.actions';
import {Observable} from 'rxjs';
import {List} from '../../models/list.model';

@Component({
  selector: 'app-todo-list-display',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  readonly list$: Observable<List> = this.store.select(selectSelectedList);
  readonly items$: Observable<Item[]> = this.store.select(selectSelectedItems);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }


  toggleItemStroke(item: Item) {
    this.store.dispatch(new ItemEditAction({
      item: {
        id: item.id,
        changes: {
          stroke: !item.stroke
        }
      }
    }));
  }
}
