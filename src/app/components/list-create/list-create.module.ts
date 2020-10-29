import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListCreateComponent} from './list-create.component';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {ListModule} from '../list/list.module';

@NgModule({
  declarations: [
    ListCreateComponent,
  ],
  exports: [
    ListCreateComponent,
  ],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    CommonModule,
    FlexModule,
    ExtendedModule,
    RouterModule,
    ListModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'legacy', floatLabel: 'never', hideRequiredMarker: true}}
  ]
})
export class ListCreateModule {
}
