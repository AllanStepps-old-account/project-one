import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllLists, selectListIsLoading} from '../../root-store/lists/lists.selector';
import {map} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  isLoading$ = this.store.select(selectListIsLoading);

  lists$ = this.store.select(selectAllLists).pipe(
    map(Object.values)
  );

  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  goToList(list: List) {
    return this.router.navigate(['list', list.id], {relativeTo: this.activatedRoute.parent});
  }
}
