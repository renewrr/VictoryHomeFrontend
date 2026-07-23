import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { handoverResolver } from './handover-resolver';

describe('handoverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => handoverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
