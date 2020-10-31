import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ListCreateRequestAction} from '../../root-store/lists/lists.actions';
import {selectListIsLoading} from '../../root-store/lists/lists.selector';
import {Observable} from 'rxjs';
import {CreationList} from '../../models/creation-list.model';
import {selectRouteQueryParams} from '../../root-store/router/router.selector';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ListAsyncValidator} from '../list/list.async-validator';
import {ListService} from '../../services/list.service';

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

  @ViewChild('name') nameInputElement: ElementRef;

  readonly creationMode = CreationMode;

  readonly isLoading$: Observable<boolean> = this.store.select(selectListIsLoading);

  listForm = this.formBuilder.group({
    name: ['', Validators.required],
  }, {asyncValidators: ListAsyncValidator.checkName(this.listService)});

  creationList: CreationList = {name: '', items: []};

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router, private listService: ListService) {
  }

  ngOnInit(): void {
    this.store.select(selectRouteQueryParams).pipe(
      take(1)
    ).subscribe(({name}) => {
      this.listForm.patchValue({name});
    });

    if (this.mode === CreationMode.COMPLETE) {
      setTimeout(() => this.nameInputElement.nativeElement.focus());
    }
  }

  onSubmit() {
    const list = this.listForm.value;
    const items = this.creationList.items;

    this.store.dispatch(new ListCreateRequestAction({list, items}));

    if (this.mode === CreationMode.FAST) {
      setTimeout(() => this.formGroupDirective.resetForm(), 200); // give some style to the clear
    }
  }

  goToAdvancedMode() {
    return this.router.navigate(['../list/create'], {queryParams: this.listForm.value});
  }
}
