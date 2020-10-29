import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {LoginRequestAction} from '../../root-store/login/login.actions';
import {selectIsAuth, selectLoginError} from '../../root-store/login/login.selector';
import {filter, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {selectSignUpError} from '../../root-store/sign-up/sign-up.selector';

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

  readonly loginError$ =  this.store.select(selectLoginError);

  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    // This is not in the effect so we can choose what to do when connected (animation, popup message, profile validation...)
    this.store.select(selectIsAuth).pipe(
      filter((isAuth) => isAuth === true),
      take(1),
      map(() => this.router.navigate(['/dashboard']))
    ).subscribe();
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
