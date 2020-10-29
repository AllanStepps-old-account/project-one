import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {SignUpRequestAction} from '../../root-store/sign-up/sign-up.actions';
import {selectIsAuth} from '../../root-store/login/login.selector';
import {filter, map, take} from 'rxjs/operators';
import {Router} from '@angular/router';

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
