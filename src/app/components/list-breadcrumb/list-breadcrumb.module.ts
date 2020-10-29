import {NgModule} from '@angular/core';
import {ListBreadcrumbComponent} from './list-breadcrumb.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ListBreadcrumbComponent,
  ],
  exports: [
    ListBreadcrumbComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
})
export class ListBreadcrumbModule {
}
