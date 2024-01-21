import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { SharingService } from './services/sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data: DataService, private sharedService: SharingService) { }
  theme: string = "light"
  font: string = "Open Sans"
  ngOnInit(): void {




    this.sharedService.themeEmitter.subscribe(theme => {
      this.theme = theme;
    })
    this.sharedService.fontEmitter.subscribe(font => {
      this.font = font;
    })
  }

}
