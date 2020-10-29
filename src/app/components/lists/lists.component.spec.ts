import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsComponent } from './lists.component';
import {ItemCreateModule} from '../item-create/item-create.module';
import {ListsModule} from './lists.module';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {SharedModule} from '../../shared.module';

describe('ListsComponent', () => {
  let component: ListsComponent;
  let fixture: ComponentFixture<ListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ListsModule]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
