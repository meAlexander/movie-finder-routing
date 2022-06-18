import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';

@Component({
  selector: 'app-country-form-field',
  templateUrl: './country-form-field.component.html',
  styleUrls: ['./country-form-field.component.css']
})
export class CountryFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit, OnDestroy {

  constructor (rootFromGroup: FormGroupDirective) {
    super(rootFromGroup);
  }

  ngOnInit (): void {
    super.ngOnInit();
  }

  ngOnDestroy (): void {
  }

}
