import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {List} from '../models/list.model';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUserId} from '../root-store/login/login.selector';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {Update} from '@ngrx/entity';
import {Item} from '../models/item.model';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private path = environment.apiUrl + '/lists';

  constructor(private httpClient: HttpClient, private store: Store) {
  }

  createList(list: List): Observable<List> {
    return this.store.select(selectUserId).pipe(
      take(1),
      switchMap((userId: string) => this.httpClient.post<List>(this.path, {...list, userId}))
    );
  }

  getLists(): Observable<List[]> {
    return this.httpClient.get<List[]>(this.path);
  }

  update(list: Update<List>): Observable<List> {
    const {id, changes} = list;
    return this.httpClient.patch<List>(this.path + '/' + id, {...changes});
  }

  checkName(value: string, id: string) {
    if (!value) {
      return of(false);
    }

    return this.httpClient.get(environment.apiUrl + '/lists?name=' + value).pipe(
      map((array: List[]) => !!array.length && (array[0].id !== id))
    );
  }
}
