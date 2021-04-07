import { TestBed } from '@angular/core/testing';

import { MyPlaylistHelpService } from './my-playlist-help.service';

describe('MyPlaylistHelpService', () => {
  let service: MyPlaylistHelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPlaylistHelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
