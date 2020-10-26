import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SignUpRequestAction} from '../../root-store/sign-up/sign-up.actions';
import {LoginRequestAction} from '../../root-store/login/login.actions';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
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
    const {email, password} = this.loginForm.value;
    this.store.dispatch(new LoginRequestAction({email, password}));
  }

  prefill() {
    this.loginForm.patchValue({
      email: 'abc@astp.me',
      password: '1234',
    });
  }
}
