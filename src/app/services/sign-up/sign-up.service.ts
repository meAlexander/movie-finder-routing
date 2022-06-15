import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private signUpFormGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) { }

  get signUpForm (): FormGroup {
    return this.signUpFormGroup;
  }

  public initForm (): FormGroup {
    this.signUpFormGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }),
      lastName: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      ),
      phone: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      ),
      country: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      ),
      email: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      ),
      password: this.formBuilder.control(
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur'
        }
      )
    });

    return this.signUpForm;
  }
}
