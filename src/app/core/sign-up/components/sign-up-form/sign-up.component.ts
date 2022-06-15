import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignUpService } from '../../../../services/sign-up/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public signUpFormGroup: FormGroup;

  constructor (private signUpService: SignUpService) { }

  ngOnInit (): void {
    this.signUpFormGroup = this.signUpService.initForm();
  }
}
