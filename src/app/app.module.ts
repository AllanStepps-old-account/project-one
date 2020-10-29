import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {DashboardModule} from './flow/dashboard/dashboard.module';
import {LandingModule} from './flow/landing/landing.module';
import {SignUpModule} from './components/sign-up/sign-up.module';
import {AppComponent} from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginModule} from './components/login/login.module';
import {AuthInterceptor} from './interceptors/jwt.interceptor';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {RootModule} from './root-store/root.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FlexModule,
    AppRoutingModule,
    RootModule,

    DashboardModule,
    LandingModule,
    SignUpModule,
    LoginModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
