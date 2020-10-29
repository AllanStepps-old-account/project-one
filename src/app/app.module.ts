import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {DashboardModule} from './flow/dashboard/dashboard.module';
import {LandingModule} from './flow/landing/landing.module';
import {SignUpModule} from './components/sign-up/sign-up.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RootModule} from './root-store/root.module';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginModule} from './components/login/login.module';
import {AuthInterceptor} from './interceptors/jwt.interceptor';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FlexModule,

    DashboardModule,
    LandingModule,
    SignUpModule,
    LoginModule,

    AppRoutingModule,
    RootModule,

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
