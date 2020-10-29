import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ListCreateRequestAction} from '../../root-store/lists/lists.actions';
import {selectListIsLoading} from '../../root-store/lists/lists.selector';
import {Observable} from 'rxjs';

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

  readonly creationMode = CreationMode;

  readonly isLoading$: Observable<boolean> = this.store.select(selectListIsLoading);

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
    this.listForm.reset();
  }

}
