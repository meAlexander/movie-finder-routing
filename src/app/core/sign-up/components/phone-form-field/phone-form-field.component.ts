import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.css']
})
export class PhoneFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {
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

  get phone (): AbstractControl {
    return this.form.get('phone');
  }

  private listenForChanges (): void {
    this.phone.statusChanges
      .pipe(takeUntil(this.leavePage$))
      .subscribe(() => {
        if (this.phone.errors?.required) {
          this.errorMessage = 'Field is required';
        } else if (this.phone.errors?.numbersOnly) {
          this.errorMessage = 'Invalid phone';
        }
      });
  }
}
