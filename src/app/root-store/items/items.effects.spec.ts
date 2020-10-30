import {Observable} from 'rxjs';
import ItemsEffects from './items.effects';
import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {ItemService} from '../../services/item.service';
import {Item} from '../../models/item.model';
import {ItemLoadFailureAction, ItemLoadRequestAction, ItemLoadSuccessAction} from './items.actions';
import {cold, hot} from 'jasmine-marbles';
import {HttpClientModule} from '@angular/common/http';

describe('ItemsEffect', () => {
  let actions: Observable<any>;
  let effects: ItemsEffects;
  let itemService: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ItemsEffects,
        provideMockActions(() => actions),
        ItemService,
      ],
    });

    effects = TestBed.inject(ItemsEffects);
    itemService = TestBed.inject(ItemService);
  });

  it('should return a stream with items loaded action', () => {
    const items: Item[] = [{id: '1', action: '1', done: false, listId: '3'}];
    const action = new ItemLoadRequestAction();
    const outcome = new ItemLoadSuccessAction({items});

    actions = hot('-a', {a: action});
    const response = cold('-a|', {a: items});
    spyOn(itemService, 'getItems').and.returnValue(response);

    const expected = cold('--b', {b: outcome});
    expect(effects.itemLoadEffect$).toBeObservable(expected);
  });

  it('should fail and return an action with the error', () => {
    const action = new ItemLoadRequestAction();
    const error = new Error('some random error because of the network') as any;
    const outcome = new ItemLoadFailureAction({error});

    actions = hot('-a', { a: action });
    const response = cold('-#|', {}, error);
    spyOn(itemService, 'getItems').and.returnValue(response);

    const expected = cold('--b', { b: outcome });
    expect(effects.itemLoadEffect$).toBeObservable(expected);
  });
});
