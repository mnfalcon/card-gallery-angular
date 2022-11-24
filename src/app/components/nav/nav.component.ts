import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input()
  sidenavOpen: boolean;
  @Output()
  sidenavOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.sidenavOpen = !this.sidenavOpen;
    this.sidenavOpenChange.emit(this.sidenavOpen);
  }
}
