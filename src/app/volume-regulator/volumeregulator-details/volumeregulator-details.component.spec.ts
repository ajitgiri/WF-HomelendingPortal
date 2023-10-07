import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeregulatorDetailsComponent } from './volumeregulator-details.component';

describe('VolumeregulatorDetailsComponent', () => {
  let component: VolumeregulatorDetailsComponent;
  let fixture: ComponentFixture<VolumeregulatorDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeregulatorDetailsComponent]
    });
    fixture = TestBed.createComponent(VolumeregulatorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
