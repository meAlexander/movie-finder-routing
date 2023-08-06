import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { SignUpService } from '../../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  public signUpFormGroup: FormGroup;
  public isLoading = false;

  constructor (private signUpService: SignUpService) { }

  ngOnInit (): void {
    this.signUpFormGroup = this.signUpService.initForm();
  }

  public submitForm (): void {
    if (this.signUpFormGroup.invalid) {
      return;
    }

    this.isLoading = true;
    this.signUpService.signUp()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe((response) => {
        console.log(response);
      });
  }
}
