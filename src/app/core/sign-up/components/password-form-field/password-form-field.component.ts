import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { INLINE_ERRORS_TRANSLATIONS } from '../../../shared/constants/inline-errors.constant';

@Component({
  selector: 'app-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['../base-sign-up-form-field/base-sign-up-form-field.component.scss', './password-form-field.component.scss']
})
export class PasswordFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {
  private leavePage$ = new Subject();

  errorMessage: string = 'Field is required';
  secondErrorMessage: string = 'Field is required';

  isPasswordFocused: boolean;

  constructor (rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnInit (): void {
    super.ngOnInit();
    this.listenForChanges();
  }

  ngOnDestroy (): void {
    this.leavePage$.next();
    this.leavePage$.complete();
  }

  get password (): AbstractControl {
    return this.form.get('password');
  }

  get repeatPassword (): AbstractControl {
    return this.form.get('repeatPassword');
  }

  private listenForChanges (): void {
    this.password.statusChanges
      .pipe(takeUntil(this.leavePage$))
      .subscribe(() => {
        if (this.password.errors?.required) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.password.required;
        } else if (this.password.errors?.maxlength) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.password.maxLength;
        } else if (this.password.errors?.passwordSameAsEmail) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.password.sameAsEmail;
        } else if (this.password.errors?.invalidPassword) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.password.invalid;
        }
      });

    this.repeatPassword.statusChanges
      .pipe(takeUntil(this.leavePage$))
      .subscribe(() => {
        if (this.repeatPassword.errors?.required) {
          this.secondErrorMessage = INLINE_ERRORS_TRANSLATIONS.password.required;
        } else if (this.repeatPassword.errors?.passwordDoesNotMatch) {
          this.secondErrorMessage = INLINE_ERRORS_TRANSLATIONS.password.doesNotMatch;
        }
      });
  }

  onPasswordFocus (): void {
    this.isPasswordFocused = true;
  }

  onPasswordBlur (): void {
    this.isPasswordFocused = false;
  }
}
