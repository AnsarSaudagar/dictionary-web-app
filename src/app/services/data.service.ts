import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { SharingService } from './sharing.service';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private sharedService: SharingService) { }

  getData(word: string) {

    return this.http.get(environment.apiUrl + word).pipe(catchError((err) => {
      this.sharedService.errorEmitter.next(true);
      return EMPTY
    }))
  }

  getMeanings(word: string) {

    return this.getData(word).pipe(
      map((data: any) => {
        const arr: any = []
        data.forEach((meaning: any) => {
          meaning.meanings.forEach((mean: any) => {
            arr.push(mean)
          })
        })
        return arr
      })
    );
  }

  getAudio(data: any) {
    let audio = "";

    let phoneticsArr = data.map((phone: any) => {
      return [...phone.phonetics]

    })[0]
    phoneticsArr.forEach((phone: any) => {
      if (phone.audio !== "") {
        audio = phone.audio
      }
    })
    return audio;

  }

  getSourceUrls(data: any) {
    const arr = []
    return this.getData(data).pipe(
      map((data: any) => {
        console.log(data);

      })
    )
  }
}
