import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroupDirective } from '@angular/forms';

import { BaseSignUpFormFieldComponent } from '../base-sign-up-form-field/base-sign-up-form-field.component';

@Component({
  selector: 'app-country-form-field',
  templateUrl: './country-form-field.component.html',
  styleUrls: ['../base-sign-up-form-field/base-sign-up-form-field.component.scss', './country-form-field.component.scss']
})
export class CountryFormFieldComponent extends BaseSignUpFormFieldComponent implements OnInit {
  countries: string[] = ['Bulgaria', 'USA', 'Germany'];

  constructor (rootFromGroup: FormGroupDirective) {
    super(rootFromGroup);
  }

  ngOnInit (): void {
    super.ngOnInit();
    this.country.setValue('Bulgaria');
  }

  get country (): AbstractControl {
    return this.form.get('country');
  }

  public onChange (event: Event, country: HTMLSelectElement): void {
    this.country.setValue(country.value);
  }
}
