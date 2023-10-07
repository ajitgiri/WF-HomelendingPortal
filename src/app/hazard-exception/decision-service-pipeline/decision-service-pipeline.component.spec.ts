import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionServicePipelineComponent } from './decision-service-pipeline.component';

describe('DecisionServicePipelineComponent', () => {
  let component: DecisionServicePipelineComponent;
  let fixture: ComponentFixture<DecisionServicePipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecisionServicePipelineComponent]
    });
    fixture = TestBed.createComponent(DecisionServicePipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
