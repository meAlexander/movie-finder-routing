import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-last-name-form-field',
  templateUrl: './last-name-form-field.component.html',
  styleUrls: ['./last-name-form-field.component.scss']
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
          this.errorMessage = 'Field is required';
        } else if (this.lastName.errors?.name) {
          this.errorMessage = 'Field is invalid';
        }
      });
  }
}
