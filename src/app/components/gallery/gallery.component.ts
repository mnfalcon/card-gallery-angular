import { Component, OnInit } from '@angular/core';
import {Card} from "../../model/card.model";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  cards: Card[] = [
    {
      "title": 'Knight',
      "imageUrl": 'https://cdna.artstation.com/p/assets/images/images/001/840/378/large/gabriel-ramos-gabrielramos-assignment03a3.jpg?1453577748',
      "description": 'A cursed knight',
      "attackDamage": 4,
      "healthPoints": 5
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
