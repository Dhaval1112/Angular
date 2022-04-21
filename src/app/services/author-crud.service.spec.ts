import { TestBed } from '@angular/core/testing';

import { AuthorCrudService } from './author-crud.service';

describe('AuthorCrudService', () => {
  let service: AuthorCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
