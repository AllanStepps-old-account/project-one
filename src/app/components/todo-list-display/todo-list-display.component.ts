import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {selectRouteParams} from '../../root-store/router/router.selector';
import {selectSelectedList} from '../../root-store/lists/lists.selector';
import {selectSelectedItems} from '../../root-store/items/items.selector';
import {Item} from '../../models/item.model';
import {ItemEditAction} from '../../root-store/items/items.actions';

@Component({
  selector: 'app-todo-list-display',
  templateUrl: './todo-list-display.component.html',
  styleUrls: ['./todo-list-display.component.scss']
})
export class TodoListDisplayComponent implements OnInit {

  readonly params$ = this.store.select(selectRouteParams);

  readonly list$ = this.store.select(selectSelectedList);
  readonly items$ = this.store.select(selectSelectedItems);

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  toggleItemStroke(item: Item) {
    item = {
      ...item,
      stroke: !item.stroke
    };

    this.store.dispatch(new ItemEditAction({item}));
  }
}
