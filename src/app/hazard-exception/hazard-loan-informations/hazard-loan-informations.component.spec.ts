import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardLoanInformationsComponent } from './hazard-loan-informations.component';

describe('HazardLoanInformationsComponent', () => {
  let component: HazardLoanInformationsComponent;
  let fixture: ComponentFixture<HazardLoanInformationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazardLoanInformationsComponent]
    });
    fixture = TestBed.createComponent(HazardLoanInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
