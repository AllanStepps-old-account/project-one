import {UserService} from '../../services/user.service';
import {AbstractControl, AsyncValidatorFn, ValidatorFn} from '@angular/forms';
import {map} from 'rxjs/operators';

export class SignUpAsyncValidator {

  public static checkEmail(userService: UserService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return userService.checkEmailExists(control.value).pipe(
        map((result) => result ? {emailExists: true} : null));
    };
  }
}
