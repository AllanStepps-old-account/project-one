import {$$, by, element} from 'protractor';
import {User} from '../../src/app/models/user.model';

export class SignUpPage {

  async fillSignUpForm(user: Partial<User>) {
    for (let field in user) {
      if (user.hasOwnProperty(field)) {
        await element(by.css(`[formcontrolname="${field}"]`)).sendKeys(user[field]);
      }
    }
  }

  toggleAgreement() {
    return element(by.css('[formcontrolname="agreement"')).click();
  }

  getSignUpSubmitButton() {
    return element(by.buttonText('REGISTER'));
  }

  getErrors() {
    return $$('[mat-error]').getText();
  }

}
