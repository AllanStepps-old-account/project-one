import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {List} from '../models/list.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {selectUserId} from '../root-store/login/login.selector';
import {switchMap, take} from 'rxjs/operators';

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
}
