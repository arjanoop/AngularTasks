import { TestBed } from '@angular/core/testing';

import { AuthenticateAdminGuardService } from './authenticate-admin-guard.service';

describe('AuthenticateAdminGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticateAdminGuardService = TestBed.get(AuthenticateAdminGuardService);
    expect(service).toBeTruthy();
  });
});
