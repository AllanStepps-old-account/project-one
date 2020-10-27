import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {List} from '../../models/list.model';
import {ItemCreateAction} from '../../root-store/items/items.actions';

@Component({
  selector: 'app-todo-list-create',
  templateUrl: './todo-item-create.component.html',
  styleUrls: ['./todo-item-create.component.scss']
})
export class TodoItemCreateComponent implements OnInit {

  @Input()
  listId: List['id'];

  itemForm = this.formBuilder.group({
    action: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
  }

  signUp() {

  }

  onSubmit() {
    const item = this.itemForm.value, listId = this.listId;
    this.store.dispatch(new ItemCreateAction({item, listId}));
  }

}
