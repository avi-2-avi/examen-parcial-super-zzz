import { TestBed } from '@angular/core/testing';

import { VfClientService } from './vf-client.service';

describe('VfClientService', () => {
  let service: VfClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VfClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
