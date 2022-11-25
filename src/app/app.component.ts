import {Component, Input} from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardsGallery';
  @Input()
  sidenavOpen: boolean = false;
  navButtonColor: ThemePalette = "primary";
  button: ThemePalette;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("menu", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/menu.svg"));
    this.matIconRegistry.addSvgIcon("x", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/x.svg"));
    this.matIconRegistry.addSvgIcon("edit", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/edit.svg"));
    this.matIconRegistry.addSvgIcon("plus", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/plus.svg"));
    this.matIconRegistry.addSvgIcon("delete", this.domSanitizer
      .bypassSecurityTrustResourceUrl("assets/icons/delete.svg"));
  }

  toggleMenu() {
    this.sidenavOpen = !this.sidenavOpen;
    this.toggleColorNav();
  }

  toggleColorNav() {
    if (this.navButtonColor === "primary") {
      this.navButtonColor = "accent";
    } else {
      this.navButtonColor = "primary";
    }
  }
}
