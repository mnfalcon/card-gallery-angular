import {Component, Input} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardsGallery';
  @Input()
  sidenavOpen: boolean = false;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("menu", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/menu.svg"));
    this.matIconRegistry.addSvgIcon("x", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/x.svg"));
  }

  toggleMenu() {
    this.sidenavOpen = !this.sidenavOpen;
  }
}
