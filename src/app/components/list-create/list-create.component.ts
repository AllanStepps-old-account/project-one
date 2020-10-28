import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {ListCreateRequestAction} from '../../root-store/lists/lists.actions';

@Component({
  selector: 'app-todo-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.scss']
})
export class ListCreateComponent implements OnInit {

  listForm = this.formBuilder.group({
    name: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const list = this.listForm.value;
    this.store.dispatch(new ListCreateRequestAction({list}));
  }

}
