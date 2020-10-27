import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDisplayComponent } from './todo-list-display.component';

describe('TodoListComponent', () => {
  let component: TodoListDisplayComponent;
  let fixture: ComponentFixture<TodoListDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
