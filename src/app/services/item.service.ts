import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Item} from '../models/item.model';
import {Update} from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path = environment.apiUrl + '/items';

  constructor(private httpClient: HttpClient, private store: Store) {
  }

  createItem(item: Item, listId: string): Observable<Item> {
    item = {
      stroke: false, // before is default
      ...item,
      listId // after is overwrite
    };

    return this.httpClient.post<Item>(this.path, {...item});
  }

  getItems() {
    return this.httpClient.get<Item[]>(this.path);
  }

  sendUpdates(items: Update<Item>[]) {
    return forkJoin(items.map(({id, changes}) => this.httpClient.patch(this.path + '/' + id, {...changes})));
  }
}
