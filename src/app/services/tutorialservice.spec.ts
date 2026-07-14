import { TestBed } from '@angular/core/testing';

import { Tutorialservice } from './tutorialservice';
import { HttpClient } from '@angular/common/http';

describe('Tutorialservice', () => {
  let service: Tutorialservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tutorialservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
