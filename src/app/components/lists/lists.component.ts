import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllLists, selectListIsLoading, selectSelectedList, selectSelectedListName} from '../../root-store/lists/lists.selector';
import {map} from 'rxjs/operators';
import {List} from '../../models/list.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {CreationMode} from '../list-create/list-create.component';

@Component({
  selector: 'app-todo-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  readonly creationMode = CreationMode;

  isLoading$: Observable<boolean> = this.store.select(selectListIsLoading);

  lists$: Observable<List[]> = this.store.select(selectAllLists).pipe(
    map(Object.values)
  );


  constructor(private store: Store, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
