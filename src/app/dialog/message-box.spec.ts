import { TestBed } from '@angular/core/testing';

import { Dialog } from '@angular/cdk/dialog';

import { MessageBoxService } from './message-box';

describe('MessageBoxService', () => {
  let service: MessageBoxService;
  let dialogSvc: Dialog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    dialogSvc = TestBed.inject(Dialog);
    service = TestBed.inject(MessageBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
