import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';

@Component({
  selector: 'app-password-form-field',
  templateUrl: './password-form-field.component.html',
  styleUrls: ['./password-form-field.component.css']
})
export class PasswordFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {

  constructor (rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnInit (): void {
    super.ngOnInit();
  }

  ngOnDestroy (): void {
  }

}
