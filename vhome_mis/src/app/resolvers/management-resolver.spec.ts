import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { managementResolver } from './management-resolver';

describe('managementResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => managementResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
