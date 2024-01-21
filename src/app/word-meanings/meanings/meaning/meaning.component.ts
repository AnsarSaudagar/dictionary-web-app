import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css']
})
export class MeaningComponent {
  @Input() meaningData: any;
}
