import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SignUpRequestAction} from '../../root-store/sign-up/sign-up.actions';
import {selectUser} from '../../root-store/login/login.selector';
import {filter, map, take} from 'rxjs/operators';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {

  readonly user$ = this.store.select(selectUser).pipe(
    filter((user) => !!user),
    take(1)
  );

  editForm = this.formBuilder.group({
    id: '',
    firstName: '', // required validators are in the template.
    lastName: '',
    email: ['', Validators.email],
    password: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
    this.prefill();
  }

  onSubmit() {
    this.store.dispatch(new SignUpRequestAction({user: this.editForm.value}));
  }

  prefill() {
    this.user$.subscribe((user: User) => {
      this.editForm.patchValue(user);
    });
  }
}
