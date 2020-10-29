import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemComponent} from './item.component';
import {ItemModule} from './item.module';
import {SharedModule} from '../../shared.module';

describe('TodoItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, ItemModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
