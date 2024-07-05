import { TestBed } from '@angular/core/testing';

import { MyTestDataService } from './my-test-data.service';

describe('MyTestDataService', () => {
  let service: MyTestDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTestDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
