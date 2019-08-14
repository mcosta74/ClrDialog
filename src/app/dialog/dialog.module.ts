import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';
import { DialogComponent } from './dialog.component';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  exports: [
    DialogComponent,
  ]
})
export class DialogModule { }
