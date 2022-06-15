import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFormFieldComponent } from './country-form-field.component';

describe('CoutrySelectorComponent', () => {
  let component: CountryFormFieldComponent;
  let fixture: ComponentFixture<CountryFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
