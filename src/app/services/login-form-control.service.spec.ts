import { TestBed } from '@angular/core/testing';

import { LoginFormControlService } from './login-form-control.service';

describe('LoginFormControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginFormControlService = TestBed.get(LoginFormControlService);
    expect(service).toBeTruthy();
  });
});
