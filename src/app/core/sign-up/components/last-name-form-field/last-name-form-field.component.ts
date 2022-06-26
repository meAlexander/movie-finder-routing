import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { INLINE_ERRORS_TRANSLATIONS } from '../../../shared/constants/inline-errors.constant';

@Component({
  selector: 'app-last-name-form-field',
  templateUrl: './last-name-form-field.component.html',
  styleUrls: ['../base-sign-up-form-field/base-sign-up-form-field.component.scss', './last-name-form-field.component.scss']
})
export class LastNameFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {
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

  get lastName (): AbstractControl {
    return this.form.get('lastName');
  }

  private listenForChanges (): void {
    this.lastName.statusChanges
      .pipe(takeUntil(this.leavePage$))
      .subscribe(() => {
        if (this.lastName.errors?.required) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.name.required;
        } else if (this.lastName.errors?.latinLettersOnly) {
          this.errorMessage = INLINE_ERRORS_TRANSLATIONS.name.invalid;
        }
      });
  }
}
