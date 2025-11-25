import { TestBed } from '@angular/core/testing';

import { MessageBoxService } from './message-box';

describe('MessageBox', () => {
  let service: MessageBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
