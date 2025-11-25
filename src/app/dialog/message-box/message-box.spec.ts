import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBox } from './message-box';

import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

import { vi } from 'vitest';

const DialogRefMock = {
  close: vi.fn()
}

describe('MessageBox', () => {
  let component: MessageBox;
  let fixture: ComponentFixture<MessageBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBox],
      providers: [
        { provide: DialogRef, useValue: DialogRefMock },
        { provide: DIALOG_DATA, useValue: {}},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
