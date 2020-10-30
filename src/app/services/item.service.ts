import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {Item} from '../models/item.model';
import {Update} from '@ngrx/entity';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private path = environment.apiUrl + '/items';

  constructor(private httpClient: HttpClient) {
  }

  createItem(item: Item, listId: string): Observable<Item> {
    item = {
      done: false, // before is default
      ...item,
      listId // after is overwrite
    };

    return this.httpClient.post<Item>(this.path, {...item});
  }

  createItems(items: Item[]): Observable<Item[]> {
    // return from(items).pipe(
    //   concatMap(item => this.httpClient.post<Item>(this.path, {...item}))
    // );
    return forkJoin(items.map((item) => this.httpClient.post<Item>(this.path, {...item})));
  }

  getItems() {
    return this.httpClient.get<Item[]>(this.path);
  }

  update(item: Update<Item>): Observable<Item> {
    const {id, changes} = item;
    return this.httpClient.patch<Item>(this.path + '/' + id, {...changes});
  }

  updateBulk(items: Update<Item>[]) {
    return forkJoin(items.map((item) => this.update(item)));
  }

  prepareItems(items: Partial<Item>[], listId: string): Item[] {
    return items.map((item) => ({
      done: false,
      ...item,
      listId
    } as Item));
  }
}
