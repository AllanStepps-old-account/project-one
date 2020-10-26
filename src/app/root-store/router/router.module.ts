import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import RouterEffects from './router.effects';
import {UserService} from '../../services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('routerReducer', routerReducer),
    EffectsModule.forFeature([RouterEffects]),
  ],
  providers: [
    UserService,
    RouterEffects
  ]
})
export class RouterModule {
}
