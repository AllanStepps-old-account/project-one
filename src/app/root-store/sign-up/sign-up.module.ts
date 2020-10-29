import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {signUpFeatureName, signUpReducer} from './sign-up.reducer';
import {EffectsModule} from '@ngrx/effects';
import SignUpEffects from './sign-up.effects';
import {UserService} from '../../services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(signUpFeatureName, signUpReducer),
    EffectsModule.forFeature([SignUpEffects])
  ],
  providers: [
    UserService,
    SignUpEffects
  ]
})
export class SignUpModule {
}
