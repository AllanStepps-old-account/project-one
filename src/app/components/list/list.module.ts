import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ItemCreateModule} from '../item-create/item-create.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FlexModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {ItemModule} from '../item/item.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  exports: [
    ListComponent,
  ],
    imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        CommonModule,
        ItemCreateModule,
        FormsModule,
        FlexModule,
        MatListModule,
        ItemModule,
    ],
})
export class ListModule {
}
