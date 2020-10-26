import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import {Store} from '@ngrx/store';
import {selectIsAuth} from '../root-store/login/login.selector';
import {Observable, of} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Injectable()
export class DashboardGuard implements CanActivate {

  constructor(private store: Store, private router: Router) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuth).pipe(
      tap((isAuth) => {
        if (!isAuth) {
          this.router.navigate(['/landing']);
        }
      })
    );
  }
}
