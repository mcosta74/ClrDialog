import { Component, signal, inject } from '@angular/core';
import '@cds/core/icon/register.js';
import { homeIcon, ClarityIcons } from '@cds/core/icon';
import {ClarityModule} from '@clr/angular';

ClarityIcons.addIcons(homeIcon);

import { Dialog, DialogModule, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';

@Component({
  selector: 'app-root',
  imports: [DialogModule, ClarityModule],
  template: `
    <div class="main-container">
      <header class="header-6">
        <div class="branding">
          <a href="javascript://" class="nav-link">
            <!-- <cds-icon shape="home"></cds-icon> -->
            <span class="title">Welcome to {{title()}}</span>
          </a>
        </div>
      </header>
      <div class="content-container">
        <div class="content-area">
          <button class="btn btn-primary" (click)="openDialog()">Open Dialog</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class App {
  dialog = inject(Dialog);

  protected readonly title = signal('clr-dialog');

  openDialog() {
    console.log('Open');
    const ref = this.dialog.open(ExampleDialog, {
      disableClose: true,
      panelClass: 'modal',
      data: { firstName: 'Massimo', lastName: 'Costa' },
    });

    ref.closed.subscribe((result) => console.log('dialog closed:', result));
  }
}


@Component({
  imports: [],
  template: `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">Hello {{data.firstName}} </div>
        </div>
        <div class="modal-body">
          Hi there!
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" (click)="close(1)">Ok</button>
          <button class="btn" (click)="close()">Cancel</button>
        </div>
      </div>
    </div>
  `
})
class ExampleDialog {
  ref = inject(DialogRef)
  protected data: {firstName: string, lastName: string} = inject(DIALOG_DATA);

  close(param?: number ) {
    console.log('Data:', this.data);
    this.ref.close(param);
  }

}
