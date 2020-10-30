import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../models/item.model';
import {ItemUpdateRequestAction} from '../../root-store/items/items.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  item: Item;

  constructor(private store: Store) { }

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
