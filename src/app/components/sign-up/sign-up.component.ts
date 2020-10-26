import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SignUpRequestAction} from '../../root-store/sign-up/sign-up.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    firstName: '', // required validators are in the template.
    lastName: '',
    email: ['', Validators.email],
    password: '',
  });

  constructor(private formBuilder: FormBuilder, private store: Store) {
  }

  ngOnInit(): void {
  }

  signUp() {

  }

  onSubmit() {
    this.store.dispatch(new SignUpRequestAction({user: this.signUpForm.value}));
  }

  prefill() {
    this.signUpForm.patchValue({
      firstName: 'Allan',
      lastName: 'Stepps',
      email: 'abc@astp.me',
      password: '1234',
    });
  }
}
