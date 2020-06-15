import { TestBed } from '@angular/core/testing';

import { DataInmemoryService } from './data-inmemory.service';

describe('DataInmemoryService', () => {
  let service: DataInmemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataInmemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
