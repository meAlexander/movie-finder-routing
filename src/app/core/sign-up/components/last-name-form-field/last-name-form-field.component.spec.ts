import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastNameFormFieldComponent } from './last-name-form-field.component';

describe('LastNameComponent', () => {
  let component: LastNameFormFieldComponent;
  let fixture: ComponentFixture<LastNameFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastNameFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastNameFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
