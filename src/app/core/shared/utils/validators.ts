import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const ONLY_NUMBERS_REGEX: RegExp = /^([0-9]{4,12})*$/;
const EMAIL_REGEX: RegExp = /^[\x20-\xFF]+@[a-zA-Z-_0-9]+?\.[a-zA-Z]{2,15}$/;

const PASSWORD_REGEX: RegExp =
  /^(?=.*[a-zA-Z])(?=.*[\d'"!#%&()*+,.\/\\:;<=>?@[\]^_`{|}~-])(?!.*\s).{8,50}$/;

const LATIN_ALPHANUMERIC_REGEX_WITHOUT_SYMBOLS_AND_DIGITS: RegExp =
  /(?=^.[\x20-\xFF]+$)[^\x21-\x40\x5B-\x60\x7B-\x89\x91-\x99\xA0-\xBF\xD7\xF7\x8B\x9B]*$/;

export function nameValidator (control: AbstractControl) {
  const name: string = control.value;
  if (!name) {
    return { required: true };
  }

  const englishLettersOnly: RegExp = new RegExp(LATIN_ALPHANUMERIC_REGEX_WITHOUT_SYMBOLS_AND_DIGITS);
  if (!englishLettersOnly.test(name)) {
    return { latinLettersOnly: true };
  }

  return null;
}

export function numberValidator (control: AbstractControl) {
  const phone: string = control.value;
  if (!phone) {
    return { required: true };
  }

  const digitsRegExp: RegExp = new RegExp(ONLY_NUMBERS_REGEX);
  if (!digitsRegExp.test(phone)) {
    return { numbersOnly: true };
  }

  return null;
}

export function emailValidator (password: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const email: string = control.value;
    if (!email) {
      return { required: true };
    }

    const emailRegExp: RegExp = new RegExp(EMAIL_REGEX);
    if (!emailRegExp.test(email)) {
      return { invalidEmail: true };
    }

    if (email === password.value) {
      control.markAsTouched();
      return { emailSameAsPassword: true };
    }

    return null;
  };
}

export function passwordValidator (email: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const password: string = control.value;
    if (!password) {
      return { required: true };
    }

    if (password === email.value) {
      control.markAsTouched();
      return { passwordSameAsEmail: true };
    }

    const passwordRegExp: RegExp = new RegExp(PASSWORD_REGEX);
    if (!passwordRegExp.test(password)) {
      return { invalidPassword: true };
    }

    return null;
  };
}

export function repeatPasswordValidator (password: AbstractControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const repeatedPassword: string = control.value;
    if (!repeatedPassword) {
      return { required: true };
    }

    if (repeatedPassword !== password.value) {
      return { passwordDoesNotMatch: true };
    }

    return null;
  };
}
