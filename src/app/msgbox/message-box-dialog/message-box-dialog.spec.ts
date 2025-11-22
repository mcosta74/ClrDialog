import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxDialog } from './message-box-dialog';

describe('MessageBoxDialog', () => {
  let component: MessageBoxDialog;
  let fixture: ComponentFixture<MessageBoxDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageBoxDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageBoxDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
