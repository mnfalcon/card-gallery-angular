import { Component, OnInit } from '@angular/core';
import {Card} from "../../model/card.model";
import {CardService} from "../../services/card-service.service";
import {CrudCardFormComponent} from "../crud-card-form/crud-card-form.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  isLoaded: boolean;
  cards: Card[] = [];
  buttonColorAdd: string = 'primary';

  constructor(private cardService: CardService ,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.cardService.findAll().subscribe(res => {
      this.cards = res as Card[];
      this.isLoaded = true;
    });
  }

  addNewCard() {
    let dialogRef = this.dialog.open(CrudCardFormComponent, {width: '500px'});
    dialogRef.componentInstance.isEdit = false;
    dialogRef.componentInstance.onClose.subscribe({next: () => {
        dialogRef.close();
      }})
    dialogRef.componentInstance.afterSave.subscribe({next: () => {
        dialogRef.close();
        this.ngOnInit();
      }})
  }

  toggleColorAdd() {
    if (this.buttonColorAdd === 'primary') {
      this.buttonColorAdd = 'accent';
    } else {
      this.buttonColorAdd = 'primary';
    }
  }
}
