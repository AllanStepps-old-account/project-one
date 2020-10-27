import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {LoginModule} from './login/login.module';
import {RouterState, RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {CustomSerializer} from './router/router.serializer';
import {RouterModule} from './router/router.module';
import {SignUpModule} from './sign-up/sign-up.module';
import RootEffects from './root.effects';
import {rootReducers} from './rootInitialState';
import {ListsModule} from './lists/lists.module';
import {ItemsModule} from './items/items.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    SignUpModule,
    RouterModule,
    ListsModule,
    ItemsModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot([RootEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomSerializer}
  ],
  declarations: []
})
export class RootModule {
}
