import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {selectIsAuth} from '../../root-store/login/login.selector';
import {filter, map, take} from 'rxjs/operators';
import {LoginRequestAction} from '../../root-store/login/login.actions';
import {ListCreateAction} from '../../root-store/lists/lists.actions';

@Component({
  selector: 'app-todo-list-create',
  templateUrl: './todo-list-create.component.html',
  styleUrls: ['./todo-list-create.component.scss']
})
export class TodoListCreateComponent implements OnInit {

  listForm = this.formBuilder.group({
    name: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
  }

  signUp() {

  }

  onSubmit() {
    const list = this.listForm.value;
    this.store.dispatch(new ListCreateAction({list}));
  }

}
