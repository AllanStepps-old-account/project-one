import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/operators';
import {selectUser} from '../../root-store/login/login.selector';
import {User} from '../../models/user.model';
import {MatSnackBarConfig} from '@angular/material/snack-bar/snack-bar-config';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private snackBar: MatSnackBar, private store: Store) {
  }

  display(message: string, action?: string, config: MatSnackBarConfig = {}) {
    return this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      ...config
    });
  }

  displayWelcomeMessage() {
    this.store.select(selectUser).pipe(
      take(1),
      map((user: User) => user.firstName)
    ).subscribe((firstName) =>
      this.display(`Welcome ${firstName} !`, 'Dismiss', {
        duration: 5000
      })
    );
  }

  pleaseRefresh() {
    this.display('There was a network issue, reloading...');
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
