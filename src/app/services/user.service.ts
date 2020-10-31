import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../models/user.model';
import {Observable, of, throwError} from 'rxjs';
import {AuthResponse} from '../models/auth.response';
import {isJwtExpired, parseJwt} from '../helpers/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly ACCESS_TOKEN_KEY = 'accessToken';

  private path = environment.apiUrl + '/users';

  constructor(private httpClient: HttpClient) {
  }

  getAccessToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  setAccessToken(accessToken: string) {
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
      tap(({accessToken}: AuthResponse) => this.setAccessToken(accessToken)),
      map(({accessToken}: AuthResponse) => {
        const {sub} = parseJwt(accessToken);
        return sub;
      }),
      mergeMap((sub: string) => this.getUser(sub)),
      catchError((error) => throwError(error.error))
    );
  }

  signUp(user: User): Observable<{ accessToken: string }> {
    return this.httpClient.post<{ accessToken: string }>(this.path, {...user}).pipe(
      tap(({accessToken}) => this.setAccessToken(accessToken)),
      catchError((error) => throwError(error.error))
    );
  }

  update(user: User): Observable<User> {
    return this.httpClient.patch<User>(this.path + '/' + user.id, {...user}).pipe(
      catchError((error) => throwError(error.error))
    );
  }

  logOut(): void {
    this.setAccessToken(null);
  }

  /**
   * Uses the stored token to validate the authentication
   * In real world, calling the server would allow us to test
   * the token against the secret, this could be done after a
   * certain amount of time to avoid excessive calls.
   *
   * @see RootStateEffects.init$
   */
  loginFromStorage(): Observable<User> {
    const accessToken = this.getAccessToken();

    if (accessToken) {
      const {sub, exp} = parseJwt(accessToken);
      if (!isJwtExpired(exp)) {
        return this.getUser(sub);
      } else {
        this.setAccessToken(null);
      }
      return throwError('Authentication expired. Please login.');
    }
    return throwError('Please login.');
  }

  /**
   * That's a quick fix to not display the User we trying to check the existing email with.
   * json-server will not return any body to the response, and we can use x-total-count from
   * pagination feature.
   * @param email
   */
  checkEmailExists(email: string): Observable<boolean> {
    if (!email) {
      return of(false);
    }
    return this.httpClient.get(environment.apiUrl + '/checkEmail/' + email, {observe: 'response'}).pipe(
      map(({headers}) => headers.get('x-total-count') === '1')
    );
  }

  private getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.path + '/' + id).pipe(
      catchError((error) => throwError(error.error))
    );
  }
}
