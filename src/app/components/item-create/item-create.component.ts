import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
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

  itemForm = this.formBuilder.group({
    action: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const item = this.itemForm.value, listId = this.listId;
    this.store.dispatch(new ItemCreateRequestAction({item, listId}));
    this.itemForm.reset();
  }

}
