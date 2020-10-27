import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TodoListsComponent} from './todo-lists.component';
import {TodoListDisplayModule} from '../todo-list-display/todo-list-display.module';
import {RouterModule} from '@angular/router';
import {TodoListCreateModule} from '../todo-list-create/todo-list-create.module';

@NgModule({
  declarations: [
    TodoListsComponent,
  ],
  exports: [
    TodoListsComponent,
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
    TodoListDisplayModule,
    RouterModule,
    TodoListCreateModule,
  ],
})
export class TodoListsModule {
}
