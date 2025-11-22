import { TestBed } from '@angular/core/testing';

import { MessageBox } from './message-box';

describe('MessageBox', () => {
  let service: MessageBox;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageBox);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
