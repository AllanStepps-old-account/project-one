import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {selectIsAuth, selectLoginIsLoading} from '../root-store/login/login.selector';
import {Observable} from 'rxjs';
import {filter, switchMapTo, take, tap} from 'rxjs/operators';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(selectLoginIsLoading).pipe(
      filter((isLoading) => isLoading === false),
      switchMapTo(this.store.select(selectIsAuth)),
      take(1),
      tap((isAuth) => {
        if (!isAuth) {
          return this.router.navigate(['/landing']);
        }
      })
    );
  }
}
