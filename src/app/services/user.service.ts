import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Observable, of, throwError} from 'rxjs';
import {AuthResponse} from '../models/auth.response';
import {parseJwt} from '../helpers/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * This method is server dependant since the json-server-auth
   * only returns the sub (id) and the email of the User.
   * @param email
   * @param password
   */
  login(email: string, password: string): Observable<User> {
    return this.httpClient.post(environment.apiUrl + '/login', {
      email,
      password
    }).pipe(
      map(({accessToken}: AuthResponse) => {
        const {sub} = parseJwt(accessToken);
        return sub;
      }),
      mergeMap((sub: string) => this.getUser(sub)),
      catchError((error) => throwError(error.error))
    );
  }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(this.path, {...user}).pipe(
      catchError((error) => throwError(error.error))
    );
  }

  private getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.path + '/' + id).pipe(
      catchError((error) => throwError(error.error))
    );
  }
}
