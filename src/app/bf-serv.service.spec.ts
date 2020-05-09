import { TestBed } from '@angular/core/testing';

import { BfServService } from './bf-serv.service';

describe('BfServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BfServService = TestBed.get(BfServService);
    expect(service).toBeTruthy();
  });
});
