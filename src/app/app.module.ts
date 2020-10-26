import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {DashboardModule} from './flow/dashboard/dashboard.module';
import {LandingModule} from './flow/landing/landing.module';
import {SignUpModule} from './components/sign-up/sign-up.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootStoreModule} from './root-store/root-store.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginModule} from './components/log-in/login.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    DashboardModule,
    LandingModule,
    SignUpModule,
    LoginModule,

    AppRoutingModule,
    RootStoreModule,

    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
