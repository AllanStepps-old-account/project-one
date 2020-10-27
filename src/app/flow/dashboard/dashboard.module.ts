import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {TodoListsComponent} from '../../components/todo-lists/todo-lists.component';
import {TodoListDisplayComponent} from '../../components/todo-list-display/todo-list-display.component';
import {TodoListDisplayModule} from '../../components/todo-list-display/todo-list-display.module';
import {TodoListsModule} from '../../components/todo-lists/todo-lists.module';
import {MatButtonModule} from '@angular/material/button';


export const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', redirectTo: '/dashboard/lists', pathMatch: 'full'},
      {path: 'lists', component: TodoListsComponent},
      {path: 'list/:id', component: TodoListDisplayComponent}
    ]
  }
];

@NgModule({
  imports: [
    TodoListDisplayModule,
    TodoListsModule,
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
