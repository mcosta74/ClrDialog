import { Component, OnInit } from '@angular/core';
import { AcceptType, ConfirmOptions } from './dialog.types';
import { DialogService } from './dialog.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  open = false;
  readonly ICON_SIZE: number = 24;
  readonly DEFAULT_OPTIONS: ConfirmOptions = {
    acceptText: 'Ok',
    acceptType: 'primary',
    cancelText: 'Cancel',
    content: 'This is the content',
    title: 'Confirm',
    onAccept: () => {},
    onCancel: () => {},
  };
  options: ConfirmOptions = this.DEFAULT_OPTIONS;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.dialogService.openChange$.subscribe(
      isOpen => {
        this.open = isOpen;
        if (isOpen) {
          setTimeout(() => this.buildOptions(this.dialogService.getOptions()));
        }
      }
    );
  }

  get acceptClass() {
    const classMap = {
      primary: 'btn-primary',
      success: 'btn-success',
      warning: 'btn-warning',
      danger: 'btn-danger',
    };

    return classMap[this.options.acceptType];
  }

  get contentMarginLeft(): string {
    const margin = this.options.iconShape ? `${this.ICON_SIZE + 6}px` : '0';
    console.log('iconClass:', this.options.iconShape, ', margin-left:', margin);
    return margin;
  }

  onButtonClick(accept: boolean) {
    if (accept) {
      this.options.onAccept();
    } else {
      this.options.onCancel();
    }
    this.dialogService.setOpen(false);
  }

  private buildOptions(options: ConfirmOptions) {
    console.log('options:', options);
    this.options = {
      ...this.DEFAULT_OPTIONS,
      ...options,
    };
    console.log('newOptions:', options);
  }
}
