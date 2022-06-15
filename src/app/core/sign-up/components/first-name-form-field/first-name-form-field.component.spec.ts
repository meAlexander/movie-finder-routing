import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstNameFormFieldComponent } from './first-name-form-field.component';

describe('FirstNameComponent', () => {
  let component: FirstNameFormFieldComponent;
  let fixture: ComponentFixture<FirstNameFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstNameFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstNameFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
