import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-phone-form-field',
  templateUrl: './phone-form-field.component.html',
  styleUrls: ['./phone-form-field.component.css']
})
export class PhoneFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {

  constructor (rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnInit (): void {
    super.ngOnInit();
  }

  ngOnDestroy (): void {
  }

}
