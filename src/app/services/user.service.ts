import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string): Observable<User> {
    return this.httpClient.get(this.path, {
      params: {
        email,
        password
      }
    }).pipe(map((results: User[]) => {
      if (results.length == 1) {
        return results[0]; // @todo create a middleware for json-server
      } else {
        throw throwError('No user found');
      }
    }));
  }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(this.path, {...user});
  }

}
