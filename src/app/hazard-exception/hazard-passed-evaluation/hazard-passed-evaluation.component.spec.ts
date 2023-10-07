import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardPassedEvaluationComponent } from './hazard-passed-evaluation.component';

describe('HazardPassedEvaluationComponent', () => {
  let component: HazardPassedEvaluationComponent;
  let fixture: ComponentFixture<HazardPassedEvaluationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazardPassedEvaluationComponent]
    });
    fixture = TestBed.createComponent(HazardPassedEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
