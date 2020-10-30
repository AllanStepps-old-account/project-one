import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedList} from '../../root-store/lists/lists.selector';
import {selectSelectedItems} from '../../root-store/items/items.selector';
import {Item} from '../../models/item.model';
import {Observable} from 'rxjs';
import {List} from '../../models/list.model';
import {ItemUpdateRequestAction} from '../../root-store/items/items.actions';
import {CreationList} from '../../models/creation-list.model';

@Component({
  selector: 'app-list-display',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: CreationList;

  readonly list$: Observable<List> = this.store.select(selectSelectedList);
  readonly items$: Observable<Item[]> = this.store.select(selectSelectedItems);

  constructor(private store: Store) {
  }

  ngOnInit(): void {
  }

  toggleItemStroke(item: Item) {
    this.store.dispatch(new ItemUpdateRequestAction({
      item: {
        id: item.id,
        changes: {
          stroke: !item.stroke
        }
      }
    }));
  }
}
