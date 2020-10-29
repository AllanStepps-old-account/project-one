import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SignUpRequestAction} from '../../root-store/sign-up/sign-up.actions';
import {selectIsAuth} from '../../root-store/login/login.selector';
import {filter, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {selectSignUpError, selectSignUpIsLoading} from '../../root-store/sign-up/sign-up.selector';
import {SignUpAsyncValidator} from './sign-up.async-validator';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    firstName: '', // required validators are in the template.
    lastName: '',
    email: ['', {validators: Validators.email, asyncValidators: SignUpAsyncValidator.checkEmail(this.userService), updateOn: 'blur'}],
    password: '',
    agreement: [false, Validators.requiredTrue]
  });

  readonly signUpError$ = this.store.select(selectSignUpError);

  readonly selectSignUpIsLoading$ = this.store.select(selectSignUpIsLoading);


  constructor(private userService: UserService, private formBuilder: FormBuilder, private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.userService.setAccessToken(null);
    // This is not in the effect so we can choose what to do when connected (animation, popup message, profile validation...)
    this.store.select(selectIsAuth).pipe(
      filter((isAuth) => isAuth === true),
      map(() => this.router.navigate(['/dashboard'])),
      take(1)
    ).subscribe();
  }

  signUp() {

  }

  onSubmit() {
    const {agreement, ...user} = this.signUpForm.value;
    this.store.dispatch(new SignUpRequestAction({user}));
  }

  prefill() {
    this.signUpForm.patchValue({
      firstName: 'Allan',
      lastName: 'Stepps',
      email: 'abc@astp.me',
      password: '1234',
      agreement: true
    });
  }
}
