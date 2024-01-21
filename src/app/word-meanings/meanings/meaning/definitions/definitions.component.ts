import { Component, Input } from '@angular/core';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-definitions',
  templateUrl: './definitions.component.html',
  styleUrls: ['./definitions.component.css']
})
export class DefinitionsComponent {
  @Input() definition: any;
  theme: string = "light"
  constructor(private sharedService: SharingService) { }

  ngOnInit(): void {
    this.sharedService.themeEmitter.subscribe(theme => {
      this.theme = theme;
    })
  }
}
