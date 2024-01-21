import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-meanings',
  templateUrl: './meanings.component.html',
  styleUrls: ['./meanings.component.css']
})
export class MeaningsComponent implements OnInit {
  meaningsArr!: any;
  word: string = ""
  constructor(
    private sharedService: SharingService,
    private dataService: DataService) { }

  ngOnInit(): void {
    // Getting all the meanings of the input words
    this.sharedService.activatedEmitter.subscribe(word => {
      this.word = word;
      this.dataService.getMeanings(word).subscribe(data => {
        this.meaningsArr = data
      })
    })
  }
}
