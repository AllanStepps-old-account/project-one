import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ItemService} from '../../services/item.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppModule} from '../../app.module';
import {SpyHelper} from '../../helpers/spy.helper';
import {ItemComponent} from './item.component';
import {Item} from '../../models/item.model';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

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

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle done', () => {
    const item: Required<Item> = {id: '1', action: 'my-item', done: false, listId: '1'};

    component.item = item;
    component.toggleItemDone(item);

    expect(itemServiceMock.update).toHaveBeenCalledWith({
      id: '1',
      changes: {
        done: true
      }
    });
  });

});
