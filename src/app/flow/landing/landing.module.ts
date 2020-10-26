import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { SignUpModule } from '../../components/sign-up/sign-up.module';
import { LandingComponent } from './landing.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    SignUpModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class LandingModule {
}
