import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionPipelineComponent } from './exception-pipeline.component';

describe('ExceptionPipelineComponent', () => {
  let component: ExceptionPipelineComponent;
  let fixture: ComponentFixture<ExceptionPipelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionPipelineComponent]
    });
    fixture = TestBed.createComponent(ExceptionPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
