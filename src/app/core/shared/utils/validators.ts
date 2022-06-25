import { AbstractControl } from '@angular/forms';

const ONLY_NUMBERS_REGEX: RegExp = /^[0-9]*$/;
const LATIN_ALPHANUMERIC_REGEX_WITHOUT_SYMBOLS_AND_DIGITS: RegExp =
  /(?=^.[\x20-\xFF]+$)[^\x21-\x40\x5B-\x60\x7B-\x89\x91-\x99\xA0-\xBF\xD7\xF7\x8B\x9B]*$/;

export function nameValidator (control: AbstractControl) {
  const name: string = control.value;
  if (!name) {
    return { required: true };
  }

  const englishLettersOnly: RegExp = new RegExp(LATIN_ALPHANUMERIC_REGEX_WITHOUT_SYMBOLS_AND_DIGITS);
  if (!englishLettersOnly.test(name)) {
    return { name: true };
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
