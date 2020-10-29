import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCreateComponent } from './list-create.component';
import {ItemCreateModule} from '../item-create/item-create.module';
import {ListCreateModule} from './list-create.module';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {SharedModule} from '../../shared.module';

xdescribe('ListCreateComponent', () => {
  let component: ListCreateComponent;
  let fixture: ComponentFixture<ListCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ListCreateModule]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
