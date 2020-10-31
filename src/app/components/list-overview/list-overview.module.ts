import {NgModule} from '@angular/core';
import {CommonModule, I18nPluralPipe} from '@angular/common';
import {ListOverviewComponent} from './list-overview.component';

@NgModule({
  declarations: [
    ListOverviewComponent,
  ],
  exports: [
    ListOverviewComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [I18nPluralPipe]
})
export class ListOverviewModule {
}
