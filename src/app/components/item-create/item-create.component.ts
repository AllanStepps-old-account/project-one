import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {List} from '../../models/list.model';
import {ItemCreateRequestAction} from '../../root-store/items/items.actions';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.scss']
})
export class ItemCreateComponent implements OnInit {

  @Input()
  listId: List['id'];

  @Input()
  list?;

  itemForm = this.formBuilder.group({
    action: ['', Validators.required],
  });


  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.itemForm.valid) {
      const item = this.itemForm.value;

      if (this.listId) {
        const listId = this.listId;
        this.store.dispatch(new ItemCreateRequestAction({item, listId}));
      } else {
        this.list.items = [item, ...this.list.items];
      }

      this.itemForm.reset();
    }
  }

  clearValidators() {
    this.itemForm.reset();
  }
}
