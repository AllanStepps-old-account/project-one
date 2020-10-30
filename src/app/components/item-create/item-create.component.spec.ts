import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemService} from '../../services/item.service';
import {ItemCreateComponent} from './item-create.component';
import {Item} from '../../models/item.model';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppModule} from '../../app.module';
import {SpyHelper} from '../../helpers/spy.helper';
import {of} from 'rxjs';

describe('ItemCreateComponent', () => {
  let component: ItemCreateComponent;
  let fixture: ComponentFixture<ItemCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [SpyHelper.provideMagicalMock(ItemService)],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  let itemServiceMock;

  beforeEach(() => {
    itemServiceMock = TestBed.inject(ItemService);

    fixture = TestBed.createComponent(ItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create an unique item', () => {
    const item: Partial<Item> = {action: 'my-item'};
    itemServiceMock.createItem.and.returnValue(of(item));

    component.listId = '1';
    component.itemForm.patchValue({
      action: 'my-item'
    });
    component.onSubmit();

    expect(itemServiceMock.createItem).toHaveBeenCalledWith(item, '1');
  });
});
