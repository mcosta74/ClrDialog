import { Component, signal, inject, OnInit } from '@angular/core';

import { homeIcon, ClarityIcons, ClrIcon } from '@clr/angular/icon';

import { MessageBoxService } from './dialog/message-box';

@Component({
  selector: 'app-root',
  imports: [ClrIcon],
  template: `
    <div class="main-container">
      <header class="header-6">
        <div class="branding">
          <a class="nav-link">
            <clr-icon shape="home" size="lg"></clr-icon>
            <span class="title">Welcome to {{ title() }}</span>
          </a>
        </div>
      </header>
      <div class="content-container">
        <div class="content-area" cds-layout="m-t:md">
          <h3 cds-text="headline">Message Box Dialog</h3>
          <p cds-text="body" cds-layout="m-t:md">This is a demo of the clr-dialog component.</p>
          <div class="clr-row" cds-layout="m-t:md">
            <button class="btn btn-info" (click)="openInfo()">Info Dialog</button>
            <button class="btn btn-warning" (click)="openWarning()">Warning Dialog</button>
            <button class="btn btn-danger" (click)="openError()">Error Dialog</button>
            <button class="btn btn-neutral" (click)="openQuestion()">Question Dialog</button>
            <button class="btn btn-success" (click)="openYesNoCancel()">
              Yes/No/Cancel Dialog
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class App implements OnInit {
  private msbBox = inject(MessageBoxService);

  protected readonly title = signal('clr-dialog');

  ngOnInit(): void {
    ClarityIcons.addIcons(homeIcon);
  }

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
