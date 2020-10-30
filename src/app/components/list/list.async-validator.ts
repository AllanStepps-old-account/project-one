import {AsyncValidatorFn, FormGroup} from '@angular/forms';
import {mapTo, tap} from 'rxjs/operators';
import {ListService} from '../../services/list.service';
import {Observable} from 'rxjs';

export class ListAsyncValidator {

  public static checkName(listService: ListService): AsyncValidatorFn {
    return (group: FormGroup): Observable<null> => {
      const {name, id} = group.value;
      return listService.checkName(name, id).pipe(
        tap((result) => {
          if (result) {
            group.controls['name'].setErrors({listExists: true});
          }
        }),
        mapTo(null)
      );
    };
  }
}
