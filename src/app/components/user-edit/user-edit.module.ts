import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UserEditComponent} from './user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UserEditComponent,
  ],
  exports: [
    UserEditComponent,
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    ReactiveFormsModule,
    RouterModule,
    FlexModule,
    MatInputModule,
    MatButtonModule
  ],
})
export class UserEditModule {
}
