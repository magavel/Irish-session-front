import { TestBed } from '@angular/core/testing';

import { TuneService } from './tune.service';

describe('TuneService', () => {
  let service: TuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
