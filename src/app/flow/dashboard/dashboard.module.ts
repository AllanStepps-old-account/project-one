import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {ListsComponent} from '../../components/lists/lists.component';
import {ListComponent} from '../../components/list/list.component';
import {ListModule} from '../../components/list/list.module';
import {ListsModule} from '../../components/lists/lists.module';
import {MatButtonModule} from '@angular/material/button';


export const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/lists', pathMatch: 'full'},
      {path: 'lists', component: ListsComponent},
      {path: 'list/:id', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [
    ListModule,
    ListsModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule {
}
