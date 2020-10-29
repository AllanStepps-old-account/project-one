import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpComponent } from './sign-up.component';
import {ItemCreateModule} from '../item-create/item-create.module';
import {SignUpModule} from './sign-up.module';
import {Store} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedModule} from '../../shared.module';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, SignUpModule]})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
