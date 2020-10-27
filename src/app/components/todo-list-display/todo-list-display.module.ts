import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {TodoListDisplayComponent} from './todo-list-display.component';
import {TodoItemCreateModule} from '../todo-item-create/todo-item-create.module';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    TodoListDisplayComponent,
  ],
  exports: [
    TodoListDisplayComponent,
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
    TodoItemCreateModule,
    FormsModule,
  ],
})
export class TodoListDisplayModule {
}
