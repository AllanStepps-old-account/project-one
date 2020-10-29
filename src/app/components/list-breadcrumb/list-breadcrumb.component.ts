import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedListName} from '../../root-store/lists/lists.selector';

@Component({
  selector: 'app-list-breadcrumb',
  templateUrl: './list-breadcrumb.component.html',
  styleUrls: ['./list-breadcrumb.component.scss']
})
export class ListBreadcrumbComponent {

  readonly selectedListName$ = this.store.select(selectSelectedListName);

  constructor(private store: Store) {
  }

}
