import { Component, OnInit } from '@angular/core';
import {ListGetAllAction} from '../../root-store/lists/lists.actions';
import {Store} from '@ngrx/store';
import {ItemGetAllAction} from '../../root-store/items/items.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new ListGetAllAction());
    this.store.dispatch(new ItemGetAllAction())
  }
}
