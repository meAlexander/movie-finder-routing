import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nameValidator, numberValidator } from '../../shared/utils/validators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private _signUpFormGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) { }

  get signUpForm (): FormGroup {
    return this._signUpFormGroup;
  }

  public initForm (): FormGroup {
    this._signUpFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(
        '',
        {
          validators: [nameValidator]
        }),
      lastName: this.formBuilder.control(
        '',
        {
          validators: [nameValidator]
        }
      ),
      phone: this.formBuilder.control(
        '',
        {
          validators: [numberValidator],
        }
      ),
      country: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
        }
      ),
      email: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
        }
      ),
      password: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
        }
      )
    });

    return this.signUpForm;
  }
}
