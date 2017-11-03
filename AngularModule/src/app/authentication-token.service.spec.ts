import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationTokenService } from './authentication-token.service';

describe('AuthenticationTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationTokenService]
    });
  });

  it('should be created', inject([AuthenticationTokenService], (service: AuthenticationTokenService) => {
    expect(service).toBeTruthy();
  }));
});
