import { Component } from '@angular/core';
import { SharingService } from '../services/sharing.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  dark: boolean = false;
  hide: boolean = true;
  constructor(private sharedService: SharingService) { }

  onClickToggle() {
    this.dark = !this.dark ? true : false;
    this.sharedService.themeEmitter.next(this.dark ? "dark" : "light");
  }

  onClickFont(font: string) {
    if (font === "Sans Serif") this.sharedService.fontEmitter.next("Open Sans");
    if (font === "Serif") this.sharedService.fontEmitter.next("PT Serif");
    if (font === "Mono") this.sharedService.fontEmitter.next("Roboto Mono");

  }




}
