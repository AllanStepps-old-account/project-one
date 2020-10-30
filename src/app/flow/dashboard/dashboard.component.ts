import {Component, OnInit} from '@angular/core';
import {ListLoadRequestAction} from '../../root-store/lists/lists.actions';
import {Store} from '@ngrx/store';
import {ItemLoadRequestAction} from '../../root-store/items/items.actions';
import {LogoutAction} from '../../root-store/login/login.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store) {
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  ngOnInit(): void {
    this.store.dispatch(new ListLoadRequestAction());
    this.store.dispatch(new ItemLoadRequestAction());
  }
}
