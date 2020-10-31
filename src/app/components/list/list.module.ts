import {NgModule} from '@angular/core';
import {ListComponent} from './list.component';
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {ItemCreateModule} from '../item-create/item-create.module';
import {ItemModule} from '../item/item.module';
import {FlexModule} from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent,
  ],
  imports: [
    CommonModule,
    FlexModule,
    ItemCreateModule,
    ItemModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class ListModule {
}
