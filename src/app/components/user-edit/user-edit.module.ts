import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {UserEditComponent} from './user-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

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
    RouterModule
  ],
})
export class UserEditModule {
}
