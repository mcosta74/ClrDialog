import { Component, inject, OnInit } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

import { warningStandardIcon, errorStandardIcon, infoStandardIcon, ClarityIcons, helpIcon, ClrIcon } from '@clr/angular/icon';

export enum MessageBoxResult {
  Accepted = 1,
  Rejected,
  Canceled,
}

export enum MessageBoxType {
  Info = 1,
  Warning,
  Error,
  Question,
  YesNoCancel,
}

export interface MessageBoxData {
  title: string
  type: MessageBoxType
  message: string
}


@Component({
  imports: [ClrIcon],
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="clr-row clr-align-items-center">
            <div class="clr-col-1">
              <clr-icon [shape]="iconShape()" [attr.status]="iconStatus()" size="lg" />
            </div>
            <div class="clr-col">
              <div cds-text="section">{{ data.title }}</div>
            </div>
          </div>

          <div class="clr-row">
            <div class="clr-col clr-offset-1">
              <p>{{ data.message }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          @if (data.type == MessageBoxType.YesNoCancel) {
          <button
            class="btn btn-outline"
            type="button"
            (click)="ref.close(MessageBoxResult.Canceled)"
          >
            Cancel
          </button>
          <button
            class="btn btn-outline"
            type="button"
            (click)="ref.close(MessageBoxResult.Rejected)"
          >
            {{ secondaryButtonText() }}
          </button>
          } @else if (data.type == MessageBoxType.Question) {
          <button
            class="btn btn-outline"
            type="button"
            (click)="ref.close(MessageBoxResult.Rejected)"
          >
            {{ secondaryButtonText() }}
          </button>
          }
          <button
            class="btn btn-primary"
            type="button"
            (click)="ref.close(MessageBoxResult.Accepted)"
          >
            {{ primaryButtonText() }}
          </button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class MessageBox implements OnInit {
  protected ref = inject(DialogRef);
  protected data: MessageBoxData = inject(DIALOG_DATA);
  protected MessageBoxResult = MessageBoxResult;
  protected MessageBoxType = MessageBoxType;

  ngOnInit(): void {
    ClarityIcons.addIcons(errorStandardIcon, infoStandardIcon, warningStandardIcon, helpIcon);
  }

  primaryButtonText(): string {
    switch (this.data.type) {
      case MessageBoxType.Info:
      case MessageBoxType.Warning:
      case MessageBoxType.Error:
        return 'Ok';

      case MessageBoxType.Question:
      case MessageBoxType.YesNoCancel:
        return 'Yes';
    }
  }

  secondaryButtonText(): string {
    switch (this.data.type) {
      case MessageBoxType.Info:
      case MessageBoxType.Warning:
      case MessageBoxType.Error:
        return '';

      case MessageBoxType.Question:
      case MessageBoxType.YesNoCancel:
        return 'No';
    }
  }

  iconShape(): string {
    switch (this.data.type) {
      case MessageBoxType.Info:
        return 'info-standard';
      case MessageBoxType.Warning:
        return 'warning-standard';
      case MessageBoxType.Error:
        return 'error-standard';
      default:
        return 'help';
    }
  }

  iconStatus(): string {
    switch (this.data.type) {
      case MessageBoxType.Info:
        return 'info';
      case MessageBoxType.Warning:
        return 'warning';
      case MessageBoxType.Error:
        return 'danger';
      default:
        return 'neutral';
    }
  }
}
