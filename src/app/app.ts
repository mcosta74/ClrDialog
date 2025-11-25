import { Component, signal, inject } from '@angular/core';

import '@cds/core/icon/register.js';
import { homeIcon, ClarityIcons } from '@cds/core/icon';
import {ClrIconModule} from '@clr/angular';

import { MessageBoxService } from './dialog/message-box';

ClarityIcons.addIcons(homeIcon);

@Component({
  selector: 'app-root',
  imports: [ClrIconModule],
  template: `
    <div class="main-container">
      <header class="header-6">
        <div class="branding">
          <a class="nav-link">
            <cds-icon shape="home" size="lg"></cds-icon>
            <span class="title">Welcome to {{ title() }}</span>
          </a>
        </div>
      </header>
      <div class="content-container">
        <div class="content-area">
          <div class="clr-row">
            <button class="btn btn-primary" (click)="openInfo()">Info Dialog</button>
            <button class="btn btn-primary" (click)="openWarning()">Warning Dialog</button>
            <button class="btn btn-primary" (click)="openError()">Error Dialog</button>
            <button class="btn btn-primary" (click)="openQuestion()">Question Dialog</button>
            <button class="btn btn-primary" (click)="openYesNoCancel()">Yes/No/Cancel Dialog</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class App {
  private msbBox = inject(MessageBoxService);

  protected readonly title = signal('clr-dialog');

  openInfo() {
    this.msbBox
      .info('Info', 'This is the Info Message')
      .subscribe(() => console.log('info closed'));
  }

  openWarning() {
    this.msbBox
      .warning('Warning', 'This is the Warning Message')
      .subscribe(() => console.log('warning closed'));
  }

  openError() {
    this.msbBox
      .error('Error', 'This is the Error Message')
      .subscribe(() => console.log('error closed'));
  }

  openQuestion() {
    this.msbBox
      .question('Question', 'Are you sure to proceede?')
      .subscribe((res) => console.log('question closed', res));
  }

  openYesNoCancel() {
    this.msbBox
      .yesNoCancel('YesNoCancel', 'Are you sure to proceede?')
      .subscribe((res) => console.log('yes/no/cancel closed', res));
  }
}
