import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './model/cocktail.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<{name: string, price: number, img: string}[]>("assets/cocktails.json")
      .pipe(
        map(cocktails => {
          return cocktails.map(c => ({
            nom: c.name,
            prix: c.price,
            image: c.img
          } as Cocktail));
        })
      );
  }
}
