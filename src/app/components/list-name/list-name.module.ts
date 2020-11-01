import {NgModule} from '@angular/core';
import {ListNameComponent} from './list-name.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ListNameComponent,
  ],
  exports: [
    ListNameComponent,
  ],
  imports: [
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class ListNameModule {
}
