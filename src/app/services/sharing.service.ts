import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SharingService {

  constructor() { }
  activatedEmitter = new Subject<string>();
  errorEmitter = new Subject<boolean>();
  themeEmitter = new BehaviorSubject<string>("light");
  fontEmitter = new BehaviorSubject<string>("Open Sans");

}
