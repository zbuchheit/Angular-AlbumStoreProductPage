import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
    private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) {
   }

   getAlbum(id: number){
    return this._http.get(this._albumUrl).pipe(
      map((incomingData) => {
        incomingData.json();
      }
    ));
   }

}
