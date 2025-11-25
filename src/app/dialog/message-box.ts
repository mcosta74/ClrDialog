import { Injectable, inject } from '@angular/core';

import {Dialog} from '@angular/cdk/dialog';

import { Observable } from 'rxjs';

import { MessageBox, MessageBoxData, MessageBoxType } from './message-box/message-box';

@Injectable({
  providedIn: 'root',
})
export class MessageBoxService {
  protected dialog = inject(Dialog);

  private show(data: MessageBoxData): Observable<unknown> {
    const ref = this.dialog.open<MessageBoxData>(MessageBox, {
      disableClose: false,
      panelClass: 'modal',
      data: data,
    });
    return ref.closed;
  }

  info(title: string, message: string): Observable<unknown> {
    return this.show({ type: MessageBoxType.Info, title: title, message: message });
  }

  warning(title: string, message: string): Observable<unknown> {
    return this.show({ type: MessageBoxType.Warning, title: title, message: message });
  }

  error(title: string, message: string): Observable<unknown> {
    return this.show({ type: MessageBoxType.Error, title: title, message: message });
  }

  question(title: string, message: string): Observable<unknown> {
    return this.show({ type: MessageBoxType.Question, title: title, message: message });
  }

  yesNoCancel(title: string, message: string): Observable<unknown> {
    return this.show({ type: MessageBoxType.YesNoCancel, title: title, message: message });
  }
}
