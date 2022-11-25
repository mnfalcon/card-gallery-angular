import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Card} from "../../model/card.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CrudCardFormComponent} from "../crud-card-form/crud-card-form.component";
import {CardService} from "../../services/card-service.service";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {SnackbarCommonsService} from "../../services/snackbar-commons.service";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  @Output()
  editChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild(MatRipple) matRipple: MatRipple;

  constructor(private router: Router,
              private dialog: MatDialog,
              private cardService: CardService,
              private snackbar: SnackbarCommonsService) {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.launchRipple();
    let dialogRef = this.dialog.open(CrudCardFormComponent, {width: '500px'});
    dialogRef.componentInstance.isEdit = true;
    dialogRef.componentInstance.cardId = this.card.id;
    this.cardService.getById(this.card.id).subscribe({ next: res => {
      // dialogRef.componentInstance.card = res as Card;
      dialogRef.componentInstance.onClose.subscribe({next: () => {
        dialogRef.close();
        }})
      dialogRef.componentInstance.afterSave.subscribe({next: () => {
        this.editChange.emit();
        dialogRef.close();
        }})
    }});
  }

  onDelete() {
    this.launchRipple();
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {width: '500px'});
    dialogRef.componentInstance.afterAction.subscribe({next: () => {
        this.cardService.deleteById(this.card.id).subscribe({next: (res) => {
          this.snackbar.displayMessage("Deleted successfully");
          this.editChange.emit();
          dialogRef.close();
          }})
      }})
    dialogRef.componentInstance.afterGoBack.subscribe({next: () => {
        this.snackbar.displayMessage("Operation cancelled", 2500);
        dialogRef.close();
      }})
  }

  launchRipple() {
    const rippleRef = this.matRipple.launch(10, 10, {
      persistent: false,
      centered: false,
      animation: {
        enterDuration: 500,
        exitDuration: 500
      }
    });
  }
}
