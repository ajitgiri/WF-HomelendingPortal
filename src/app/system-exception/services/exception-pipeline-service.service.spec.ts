import { TestBed } from '@angular/core/testing';

import { ExceptionPipelineServiceService } from './exception-pipeline-service.service';

describe('ExceptionPipelineServiceService', () => {
  let service: ExceptionPipelineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionPipelineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
