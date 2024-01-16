import { TestBed } from '@angular/core/testing';

import { GuardnouserGuard } from './guardnouser.guard';

describe('GuardnouserGuard', () => {
  let guard: GuardnouserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardnouserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
