import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule, I18nPluralPipe} from '@angular/common';
import {ListOverviewComponent} from './list-overview.component';
import {ExtendedModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    ListOverviewComponent,
  ],
  exports: [
    ListOverviewComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ExtendedModule,
  ],
  providers: [I18nPluralPipe]
})
export class ListOverviewModule {
}
