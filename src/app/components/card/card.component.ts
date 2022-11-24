import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../model/card.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;
  constructor() {
  }

  ngOnInit(): void {
  }

}
