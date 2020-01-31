import { TestBed } from '@angular/core/testing';

import { MyServiceTestService } from './my-service-test.service';

describe('MyServiceTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyServiceTestService = TestBed.get(MyServiceTestService);
    expect(service).toBeTruthy();
  });
});
