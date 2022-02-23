import { TestBed } from '@angular/core/testing';

import { PassBetCompService } from './pass-bet-comp.service';

describe('PassBetCompService', () => {
  let service: PassBetCompService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassBetCompService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
