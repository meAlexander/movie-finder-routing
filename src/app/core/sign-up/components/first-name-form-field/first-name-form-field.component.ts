import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { INLINE_ERRORS_TRANSLATIONS } from '../../../shared/constants/inline-errors.constant';

@Component({
  selector: 'app-first-name-form-field',
  templateUrl: './first-name-form-field.component.html',
  styleUrls: ['../base-sign-up-form-field/base-sign-up-form-field.component.scss', './first-name-form-field.component.scss']
})
export class FirstNameFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {
  private leavePage$ = new Subject();
  errorMessage: string = 'Field is required';

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

  get firstName (): AbstractControl {
    return this.form.get('firstName');
  }

  private listenForChanges (): void {
    this.firstName.statusChanges
      .pipe(takeUntil(this.leavePage$))
      .subscribe(() => {
        if (this.firstName.errors?.required) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.name.required;
        } else if (this.firstName.errors?.latinLettersOnly) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.name.invalid;
        }
      });
  }
}
