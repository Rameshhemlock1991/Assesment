import { TestBed } from '@angular/core/testing';

import { AppAutocompleteService } from './app-autocomplete.service';

describe('AppAutocompleteService', () => {
  let service: AppAutocompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAutocompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
