import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs';
import { ConfirmOptions } from './dialog.types';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent implements OnInit {

  options$: Observable<ConfirmOptions>;

  readonly ICON_SIZE: number = 36;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.options$ = this.dialogService.options$;
  }

  getAcceptClass(acceptType: string): string {
    const classMap = {
      primary: 'btn-primary',
      success: 'btn-success',
      warning: 'btn-warning',
      danger: 'btn-danger',
    };
    return classMap[acceptType];
  }

  getContentMarginLeft(iconShape: string): string {
    return iconShape ? `${this.ICON_SIZE + 6}px` : '0';
  }

  close(value: boolean) {
    this.dialogService.close(value);
  }
}
