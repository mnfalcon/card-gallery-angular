import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarCommonsService {

  constructor(private snackbar: MatSnackBar) { }

  displayMessage(text: string, duration: number = 5000) {
    this.snackbar.open(text, "Okay", {duration: duration});
  }
}
