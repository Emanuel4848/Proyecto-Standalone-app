import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPrimeFlexComponent } from './user-form-prime-flex.component';

describe('UserFormPrimeFlexComponent', () => {
  let component: UserFormPrimeFlexComponent;
  let fixture: ComponentFixture<UserFormPrimeFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormPrimeFlexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormPrimeFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
