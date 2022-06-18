import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpRoutingModule } from './sign-up-routing.module';

import { SignUpComponent } from './components/sign-up-form/sign-up.component';
import { BaseSignUpFormFieldComponent } from './components/base-sign-up-form-field/base-sign-up-form-field.component';
import { FirstNameFormFieldComponent } from './components/first-name-form-field/first-name-form-field.component';
import { LastNameFormFieldComponent } from './components/last-name-form-field/last-name-form-field.component';
import { CountryFormFieldComponent } from './components/country-form-field/country-form-field.component';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import { PhoneFormFieldComponent } from './components/phone-form-field/phone-form-field.component';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignUpComponent,
    BaseSignUpFormFieldComponent,
    FirstNameFormFieldComponent,
    LastNameFormFieldComponent,
    CountryFormFieldComponent,
    PhoneFormFieldComponent,
    EmailFormFieldComponent,
    PasswordFormFieldComponent
  ]
})
export class SignUpModule { }
