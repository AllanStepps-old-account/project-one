import {Component, OnInit} from '@angular/core';
import {ListLoadRequestAction} from '../../root-store/lists/lists.actions';
import {Store} from '@ngrx/store';
import {ItemGetAllAction} from '../../root-store/items/items.actions';
import {UserService} from '../../services/user.service';
import {LogoutAction} from '../../root-store/login/login.actions';
import {slideInOutAnimation} from './dashboard.animation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // animations: [slideInOutAnimation],
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store, private userService: UserService) {
  }

  logout() {
    this.store.dispatch(new LogoutAction());
  }

  ngOnInit(): void {
    this.store.dispatch(new ListLoadRequestAction());
    this.store.dispatch(new ItemGetAllAction());
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
