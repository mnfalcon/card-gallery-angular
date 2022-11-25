import { TestBed } from '@angular/core/testing';

import { SnackbarCommonsService } from './snackbar-commons.service';

describe('SnackbarCommonsService', () => {
  let service: SnackbarCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
