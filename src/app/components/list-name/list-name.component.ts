import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedList} from '../../root-store/lists/lists.selector';
import {Observable} from 'rxjs';
import {List} from '../../models/list.model';
import {CreationList} from '../../models/creation-list.model';
import {ListUpdateRequestAction} from '../../root-store/lists/lists.actions';
import {FormBuilder, Validators} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {ListNameAsyncValidator} from './list-name.async-validator';

@Component({
  selector: 'app-list-name',
  templateUrl: './list-name.component.html',
  styleUrls: ['./list-name.component.scss']
})
export class ListNameComponent {

  @Input() list: CreationList;

  readonly list$: Observable<List> = this.store.select(selectSelectedList);

  listFormGroup = this.formBuilder.group({
    initialName: '',
    name: ['', Validators.required],
    id: '',
  }, {asyncValidators: ListNameAsyncValidator.checkName(this.listService)});

  editMode = false;

  constructor(private store: Store, private listService: ListService, private formBuilder: FormBuilder) {
  }

  /**
   * listName is given as a parameter here so we keep the sync if the user
   * change the input but give up the edition of the name.
   * @param name
   * @param id
   */
  goEditMode(name: string, id: string) {
    this.editMode = true;
    this.listFormGroup.patchValue({name, id, initialName: name});
    // this.nameInput.nativeElement.setSelectionRange(0, this.nameInput.nativeElement.value.length);
  }

  updateListName() {
    if (this.listFormGroup.valid) {
      const {name, id, initialName} = this.listFormGroup.value;

      if (name !== initialName) {
        this.store.dispatch(new ListUpdateRequestAction({
          list: {
            id,
            changes: {name}
          },
        }));
      }

      this.leaveEditMode();
    }
  }

  leaveEditMode() {
    this.editMode = false;
  }
}
