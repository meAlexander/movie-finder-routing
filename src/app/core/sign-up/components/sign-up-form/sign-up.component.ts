import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpService } from '../../../services/sign-up/sign-up.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  public signUpFormGroup: FormGroup;
  isButtonDisabled: boolean = false;

  constructor (private signUpService: SignUpService) { }

  ngOnInit (): void {
    this.signUpFormGroup = this.signUpService.initForm();
    this.updateFormStatusDynamically();
  }

  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public submitForm (): void {
    if (this.signUpFormGroup.invalid) {
      return;
    }
  }

  private updateFormStatusDynamically (): void {
    this.signUpFormGroup.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log(this.signUpFormGroup);
        console.log(response);
        this.isButtonDisabled = response !== 'VALID';
      });
  }
}
