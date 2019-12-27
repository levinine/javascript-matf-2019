import { TestBed } from '@angular/core/testing';

import { PhonebookService } from './phonebook.service';

describe('PhonebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonebookService = TestBed.get(PhonebookService);
    expect(service).toBeTruthy();
  });
});
