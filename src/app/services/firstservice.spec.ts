import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { Firstservice } from './firstservice';

describe('Firstservice', () => {

  let service: Firstservice;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(Firstservice);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});