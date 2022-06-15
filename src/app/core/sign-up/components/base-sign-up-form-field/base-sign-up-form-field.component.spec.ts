import { BaseSignUpFormFieldComponent } from './base-sign-up-form-field.component';
import { FormGroupDirective } from '@angular/forms';

describe('BaseSignUpFormFieldComponent', () => {
  let component: BaseSignUpFormFieldComponent;
  const formGroupDirective: FormGroupDirective = null;

  beforeEach(() => {
    component = new BaseSignUpFormFieldComponent(formGroupDirective);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
