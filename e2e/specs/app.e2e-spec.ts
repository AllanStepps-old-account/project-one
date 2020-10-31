import {AppPage} from '../pages-objects/app.po';
import {browser, by, element, ExpectedConditions, logging} from 'protractor';
import {SignUpPage} from '../pages-objects/sign-up.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let signUpPage: SignUpPage;

  beforeEach(() => {
    page = new AppPage();
    signUpPage = new SignUpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('To-Do List Manager');
  });

  it('should sign up correctly', () => {
    element(by.buttonText('Sign up')).click();

    const submitButton = signUpPage.getSignUpSubmitButton();

    signUpPage.fillSignUpForm({
      firstName: 'Allan',
      lastName: 'Stepps',
      email: 'abc@astp.me',
      password: 'abcd'
    });

    expect(submitButton.isEnabled()).toEqual(false,
      'Submit button is enabled, agreement is not fulfilled.');

    signUpPage.toggleAgreement();

    expect(submitButton.isEnabled()).toEqual(true,
      'Submit button is disabled');

    submitButton.click();

    browser.wait(ExpectedConditions.urlContains('/dashboard/'));

    page.logOut();
  });

  it('should not sign up with existing email', () => {
    element(by.buttonText('Sign up')).click();

    const submitButton = signUpPage.getSignUpSubmitButton();

    signUpPage.fillSignUpForm({
      firstName: 'Allan',
      lastName: 'Stepps',
      email: 'abc@astp.me',
      password: 'abcd'
    });

    signUpPage.toggleAgreement();

    browser.sleep(1000);

    expect(submitButton.isEnabled()).toEqual(false, 'Submit button is enabled');

    // expect(signUpPage.getErrors()).toContain('Email already exists...');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    // const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    // expect(logs).not.toContain(jasmine.objectContaining({
    //   level: logging.Level.SEVERE,
    // } as logging.Entry));
  });
});
