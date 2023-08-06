import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {
  emailValidator,
  nameValidator,
  numberValidator,
  passwordValidator,
  repeatPasswordValidator
} from '../../shared/utils/validators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private _signUpFormGroup: FormGroup;

  private readonly AWS_URL: string = 'https://tpofm6qv98.execute-api.eu-north-1.amazonaws.com/movie_finder_prod/sign-up';

  constructor (
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
  ) { }

  get signUpForm (): FormGroup {
    return this._signUpFormGroup;
  }

  public initForm (): FormGroup {
    this._signUpFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(
        '',
        { validators: [nameValidator] }
      ),
      lastName: this.formBuilder.control(
        '',
        { validators: [nameValidator] }
      ),
      phone: this.formBuilder.control(
        '',
        { validators: [numberValidator] }
      ),
      country: this.formBuilder.control(
        '',
        { validators: [Validators.required] }
      ),
      email: this.formBuilder.control(
        '',
        { validators: [emailValidator] }
      ),
      password: this.formBuilder.control(
        '',
        { validators: [Validators.maxLength(50)] }
      ),
      repeatPassword: this.formBuilder.control('')
    });
    this._signUpFormGroup.get('email').addValidators(emailValidator(this._signUpFormGroup.get('password')));
    this._signUpFormGroup.get('password').addValidators(passwordValidator(this._signUpFormGroup.get('email')));
    this._signUpFormGroup.get('repeatPassword').addValidators(repeatPasswordValidator(this._signUpFormGroup.get('password')));

    return this.signUpForm;
  }

  public signUp (): Observable<any> {
    return this.httpClient.post(this.AWS_URL, this.signUpForm.getRawValue());
  }
}
