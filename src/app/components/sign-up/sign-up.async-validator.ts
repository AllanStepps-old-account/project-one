import {UserService} from '../../services/user.service';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import {map} from 'rxjs/operators';

export class SignUpAsyncValidator {

  public static checkEmail(userService: UserService): ValidatorFn {
    return (control: AbstractControl) => {
      return userService.checkEmailExists(control.value).pipe(
        map((result) => result ? {emailExists: true} : null));
    };
  }
}
