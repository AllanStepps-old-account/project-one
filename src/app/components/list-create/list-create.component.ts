import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ListCreateRequestAction} from '../../root-store/lists/lists.actions';
import {selectListIsLoading} from '../../root-store/lists/lists.selector';
import {Observable} from 'rxjs';
import {CreationList} from '../../models/creation-list.model';

export enum CreationMode {
  FAST = 'fast',
  COMPLETE = 'complete'
}

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.scss']
})
export class ListCreateComponent implements OnInit {

  @Input()
  mode: CreationMode = CreationMode.COMPLETE;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  readonly creationMode = CreationMode;

  readonly isLoading$: Observable<boolean> = this.store.select(selectListIsLoading);

  listForm = this.formBuilder.group({
    name: '',
  });

  creationList: CreationList = {name: '', items: []};

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const list = this.listForm.value;
    const items = this.creationList.items;

    this.store.dispatch(new ListCreateRequestAction({list, items}));

    if (this.mode === CreationMode.FAST) {
      setTimeout(() => this.formGroupDirective.resetForm(), 200); // give some style to the clear
    }
  }
}
