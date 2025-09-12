import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit() {
  }

  onConfirm() {
    this.dialog.confirm({
      title: 'Send Email',
      content: 'Are you sure to send the confirmation email?',
    }).subscribe(result => console.log('Confirm:', result));
  }

  onCustomConfirm() {
    this.dialog.confirm({
      title: 'Delete item',
      content: 'Are you sure you want to delete this <b>item</b>? The operation cannot be reverted',
      acceptText: 'Delete',
      acceptType: 'warning',
      iconShape: null,
    });
  }

  onInfo() {
    this.dialog.info({
      title: 'Info',
      content: 'Info content',
    });
  }

  onSuccess() {
    this.dialog.success({
      title: 'Success',
      content: 'Success content',
    });
  }

  onWarning() {
    this.dialog.warning({
      title: 'Warning',
      content: 'Warning content',
    });
  }

  onError() {
    this.dialog.error({
      title: 'Error',
      content: 'Error content',
    });
  }
}
