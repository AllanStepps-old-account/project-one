import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {WelcomeComponent} from './welcome.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  exports: [
    WelcomeComponent,
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class WelcomeModule {
}
