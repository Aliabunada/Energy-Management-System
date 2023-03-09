import { TestBed } from '@angular/core/testing';

import { SharedMeterDataService } from './shared-meter-data.service';

describe('SharedMeterDataService', () => {
  let service: SharedMeterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedMeterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
