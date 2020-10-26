import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {loginReducer} from './login.reducer';
import {EffectsModule} from '@ngrx/effects';
import LoginEffects from './login.effects';
import {UserService} from '../../services/user.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('auth', loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [
    UserService,
    LoginEffects
  ]
})
export class LoginModule {
}
