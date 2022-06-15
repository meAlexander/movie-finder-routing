import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-last-name-form-field',
  templateUrl: './last-name-form-field.component.html',
  styleUrls: ['./last-name-form-field.component.css']
})
export class LastNameFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {

  constructor (rootFormGroup: FormGroupDirective) {
    super(rootFormGroup);
  }

  ngOnInit (): void {
  }

  ngOnDestroy (): void {
  }

}
