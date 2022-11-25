import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
  message: string = 'Are you sure you want to proceed with this action?';
  yes: string = 'Yes';
  no: string = 'No';
  afterAction: EventEmitter<any> = new EventEmitter<any>();
  afterGoBack: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.afterGoBack.emit();
  }

  confirmAction() {
    this.afterAction.emit();
  }

}
