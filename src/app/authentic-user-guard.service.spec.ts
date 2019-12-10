import { TestBed } from '@angular/core/testing';

import { AuthenticUserGuardService } from './authentic-user-guard.service';

describe('AuthenticUserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticUserGuardService = TestBed.get(AuthenticUserGuardService);
    expect(service).toBeTruthy();
  });
});
