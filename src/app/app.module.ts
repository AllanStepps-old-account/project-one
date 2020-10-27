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
import {RootModule} from './root-store/root.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MatButtonModule} from '@angular/material/button';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginModule} from './components/log-in/login.module';
import { TodoListDisplayComponent } from './components/todo-list-display/todo-list-display.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListsComponent } from './components/todo-lists/todo-lists.component';
import {AuthInterceptor} from './interceptors/jwt.interceptor';

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
    RootModule,

    MatToolbarModule,
    MatButtonModule,
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
