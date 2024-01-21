import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { SharingService } from 'src/app/services/sharing.service';

@Component({
  selector: 'app-word-title',
  templateUrl: './word-title.component.html',
  styleUrls: ['./word-title.component.css']
})
export class WordTitleComponent {
  title!: string;
  phonetic!: string;
  soundUrl !: string;

  constructor(private shareService: SharingService, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.shareService.activatedEmitter.subscribe(word => {
      this.dataService.getData(word).subscribe((data: any) => {
        console.log(data);

        this.title = data[0].word
        this.phonetic = data[0].phonetic

        this.soundUrl = this.dataService.getAudio(data)

      })
    })
  }

  onClickPlay() {
    let audio = new Audio();
    audio.src = this.soundUrl
    audio.load();
    audio.play();
  }



}
