import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharingService } from '../services/sharing.service';


@Component({
  selector: 'app-word-meanings',
  templateUrl: './word-meanings.component.html',
  styleUrls: ['./word-meanings.component.css']
})
export class WordMeaningsComponent {

  showError: boolean = false;
  theme: string = "light"
  constructor(private shareService: SharingService, private dataService: DataService) { }

  ngOnInit(): void {

    this.shareService.errorEmitter.subscribe(condition => {
      this.showError = condition
    })

    this.shareService.themeEmitter.subscribe(theme => {
      this.theme = theme
    })

    this.shareService.activatedEmitter.subscribe(word => {

      this.dataService.getData(word).subscribe((data: any) => {
        this.shareService.errorEmitter.next(false)
      }, (err: any) => { this.shareService.errorEmitter.next(true) })
    })
  }
}
