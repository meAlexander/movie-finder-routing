import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { FirstNameFormFieldComponent } from './components/first-name-form-field/first-name-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseSignUpFormFieldComponent } from './components/base-sign-up-form-field/base-sign-up-form-field.component';
import { SignUpComponent } from './components/sign-up-form/sign-up.component';
import { LastNameFormFieldComponent } from './components/last-name-form-field/last-name-form-field.component';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import { PhoneFormFieldComponent } from './components/phone-form-field/phone-form-field.component';
import { PasswordFormFieldComponent } from './components/password-form-field/password-form-field.component';
import { CountryFormFieldComponent } from './components/country-form-field/country-form-field.component';

@NgModule({
  imports: [SignUpRoutingModule, ReactiveFormsModule],
  declarations: [
    FirstNameFormFieldComponent,
    BaseSignUpFormFieldComponent,
    SignUpComponent,
    LastNameFormFieldComponent,
    EmailFormFieldComponent,
    PhoneFormFieldComponent,
    PasswordFormFieldComponent,
    CountryFormFieldComponent
  ]
})
export class SignUpModule { }
