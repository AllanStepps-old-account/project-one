import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemDeleteRequestAction, ItemUpdateRequestAction} from '../../root-store/items/items.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input()
  item: Item;

  constructor(private store: Store) { }

  toggleItemDone(item: Item) {
    this.store.dispatch(new ItemUpdateRequestAction({
      item: {
        id: item.id,
        changes: {
          done: !item.done
        }
      }
    }));
  }

  delete(item: Item) {
    this.store.dispatch(new ItemDeleteRequestAction({item}));
  }
}
