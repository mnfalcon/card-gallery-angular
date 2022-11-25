import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Card} from "../../model/card.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CrudCardFormComponent} from "../crud-card-form/crud-card-form.component";
import {CardService} from "../../services/card-service.service";
import {ConfirmationDialogComponent} from "../confirmation-dialog/confirmation-dialog.component";
import {SnackbarCommonsService} from "../../services/snackbar-commons.service";

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
  constructor(private router: Router,
              private dialog: MatDialog,
              private cardService: CardService,
              private snackbar: SnackbarCommonsService) {
  }

  ngOnInit(): void {
  }

  onEdit() {
    this.cardService.getById(this.card.id).subscribe({ next: res => {
      let dialogRef = this.dialog.open(CrudCardFormComponent, {width: '500px'});
      dialogRef.componentInstance.card = res as Card;
      dialogRef.componentInstance.isEdit = true;
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
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {width: '500px'});
    dialogRef.componentInstance.afterAction.subscribe({next: () => {
        this.cardService.deleteById(this.card.id).subscribe({next: (res) => {
          this.snackbar.displayMessage("Deleted successfully");
          dialogRef.close();
          }})
      }})
    dialogRef.componentInstance.afterGoBack.subscribe({next: () => {
        dialogRef.close();
      }})
  }
}
