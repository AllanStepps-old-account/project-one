import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {SignUpModule} from '../../components/sign-up/sign-up.module';
import {LandingComponent} from './landing.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../components/login/login.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';
import {WelcomeComponent} from '../../components/welcome/welcome.component';
import {WelcomeModule} from '../../components/welcome/welcome.module';
import {UserEditComponent} from '../../components/user-edit/user-edit.component';
import {UserEditModule} from '../../components/user-edit/user-edit.module';


export const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {path: '', component: WelcomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'edit-user', component: UserEditComponent}
    ]
  }
];

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    WelcomeModule,
    SignUpModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    UserEditModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class LandingModule {
}
