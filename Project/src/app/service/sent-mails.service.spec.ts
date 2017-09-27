import { TestBed, inject } from '@angular/core/testing';

import { SentMailsService } from './sent-mails.service';

describe('SentMailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SentMailsService]
    });
  });

  it('should be created', inject([SentMailsService], (service: SentMailsService) => {
    expect(service).toBeTruthy();
  }));
});
