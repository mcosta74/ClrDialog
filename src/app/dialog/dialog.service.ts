import { Injectable } from '@angular/core';

// import { DialogModule } from './dialog.module';
import { ConfirmOptions, ConfirmType } from './dialog.types';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  private isOpen = false;
  private openChange: Subject<boolean> = new Subject<boolean>();
  openChange$: Observable<boolean> = this.openChange.asObservable();

  private options: ConfirmOptions = {};
  getOptions(): ConfirmOptions {
    return this.options;
  }

  setOptions(options: ConfirmOptions) {
    this.options = options;
  }

  setOpen(value: boolean) {
    if (value !== this.isOpen) {
      this.isOpen = value;
      this.openChange.next(value);
    }
  }

  constructor() { }

  confirm(options: ConfirmOptions = {}) {
    if (!('iconShape' in options)) {
      options.iconShape = 'help';
    }

    if (!('iconClass' in options)) {
      options.iconClass = 'is-highlight is-solid';
    }

    this.create(options, 'confirm');
  }

  error(options: ConfirmOptions = {}) {
    this.simpleConfirm(options, 'error');
  }

  info(options: ConfirmOptions = {}) {
    this.simpleConfirm(options, 'info');
  }

  success(options: ConfirmOptions = {}) {
    this.simpleConfirm(options, 'success');
  }

  warning(options: ConfirmOptions = {}) {
    this.simpleConfirm(options, 'warning');
  }

  private simpleConfirm(options: ConfirmOptions = {}, confirmType: ConfirmType) {
    const iconsMap = {
      info: 'info-standard',
      success: 'success-standard',
      error: 'error-standard',
      warning: 'warning-standard',
    };

    const classMap = {
      info: 'is-info is-solid',
      success: 'is-success is-solid',
      error: 'is-error is-solid',
      warning: 'is-warning is-solid',
    };

    options.iconShape = iconsMap[confirmType];
    options.iconClass = classMap[confirmType];

    if (!('cancelText' in options)) {
      options.cancelText = null;
    }
    this.create(options, confirmType);
  }

  private create(options: ConfirmOptions = {}, confirmType: ConfirmType = 'confirm') {
    this.setOptions(options);
    this.setOpen(true);
  }
}
