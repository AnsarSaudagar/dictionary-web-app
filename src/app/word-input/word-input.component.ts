import { Component, ViewChild } from '@angular/core';
import { SharingService } from '../services/sharing.service';
import { DataService } from '../services/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent {
  word: string = ""
  constructor(private shareService: SharingService, private dataService: DataService) { }
  @ViewChild('f') wordForm!: NgForm;

  onSearch() {
    // console.log(this.word);
    console.log(this.wordForm.value);
    if (this.wordForm.invalid) {
      return;
    }

    this.shareService.activatedEmitter.next(this.word);



  }
}
