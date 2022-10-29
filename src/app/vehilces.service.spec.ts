import { TestBed } from '@angular/core/testing';

import { VehilcesService } from './vehilces.service';

describe('VehilcesService', () => {
  let service: VehilcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehilcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
