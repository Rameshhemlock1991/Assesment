import { TestBed } from '@angular/core/testing';

import { MyPlaylistMasterService } from './my-playlist-master.service';

describe('MyPlaylistMasterService', () => {
  let service: MyPlaylistMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlaylistMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
