import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.css']
})
export class EmailFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {

  constructor (rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnInit (): void {
  }

  ngOnDestroy (): void {
  }

}
