import { TestBed } from '@angular/core/testing';

import { DepartmentlistService } from './departmentlist.service';

describe('DepartmentlistService', () => {
  let service: DepartmentlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
