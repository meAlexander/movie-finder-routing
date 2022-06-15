import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  template: '',
  styleUrls: []
})
export class BaseSignUpFormFieldComponent implements OnInit {

  form: FormGroup;

  constructor (private rootFormGroup: FormGroupDirective) { }

  ngOnInit (): void {
    this.form = this.rootFormGroup.control;
  }
}
