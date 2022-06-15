import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-first-name-form-field',
  templateUrl: './first-name-form-field.component.html',
  styleUrls: ['./first-name-form-field.component.css']
})
export class FirstNameFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {
  private leavePage$ = new Subject();
  public errorMessage: string;

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
        if (this.firstName.errors) {
          this.errorMessage = 'Field is required';
        } else {
          this.errorMessage = 'Field is invalid';
        }


      });
  }
}
