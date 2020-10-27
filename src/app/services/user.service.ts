import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Observable, of, throwError} from 'rxjs';
import {AuthResponse} from '../models/auth.response';
import {parseJwt} from '../helpers/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly ACCESS_TOKEN_KEY = 'accessToken';

  private path = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) {
  }

  get accessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  set accessToken(accessToken: string) {
    if (accessToken == null) {
      localStorage.removeItem(this.ACCESS_TOKEN_KEY);
    } else {
      localStorage.setItem(this.ACCESS_TOKEN_KEY, accessToken);
    }
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
      tap(({accessToken}: AuthResponse) => this.accessToken = accessToken),
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

  logOut(): void {
    this.accessToken = null;
  }

  /**
   * Uses the stored token to validate the authentication
   * In real world, calling the server would allow us to test
   * the token against the secret, this could be done after a
   * certain amount of time to avoid excessive calls.
   *
   * @see RootStateEffects.init$
   */
  drylogin(): Observable<User> {
    if (this.accessToken) {
      const {sub, exp} = parseJwt(this.accessToken);
      if (exp > Date.now() / 1000) {
        return this.getUser(sub);
      } else {
        this.accessToken = null;
      }
      return throwError('Authentication expired. Please log-in.');
    }
    return throwError('Please log-in.');
  }

  private getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.path + '/' + id).pipe(
      catchError((error) => throwError(error.error))
    );
  }
}
