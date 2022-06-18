import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignUpService } from '../../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  public signUpFormGroup: FormGroup;

  constructor (private signUpService: SignUpService) { }

  ngOnInit (): void {
    this.signUpFormGroup = this.signUpService.initForm();
  }

  public submitForm (): void {

  }
}
