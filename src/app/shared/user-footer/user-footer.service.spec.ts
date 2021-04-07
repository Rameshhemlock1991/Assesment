import { TestBed } from '@angular/core/testing';

import { UserFooterService } from './user-footer.service';

describe('UserFooterService', () => {
  let service: UserFooterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFooterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
