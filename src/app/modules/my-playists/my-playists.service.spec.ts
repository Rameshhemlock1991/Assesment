import { TestBed } from '@angular/core/testing';

import { MyPlayistsService } from './my-playists.service';

describe('MyPlayistsService', () => {
  let service: MyPlayistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlayistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
