import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeregulatorHomeComponent } from './volumeregulator-home.component';

describe('VolumeregulatorHomeComponent', () => {
  let component: VolumeregulatorHomeComponent;
  let fixture: ComponentFixture<VolumeregulatorHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VolumeregulatorHomeComponent]
    });
    fixture = TestBed.createComponent(VolumeregulatorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
