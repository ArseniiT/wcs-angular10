import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [
    { nom: 'Mojito', prix: 5, image: 'https://www.gimmesomeoven.com/wp-content/uploads/2018/05/How-To-Make-A-Mojito-Recipe-Cocktail-Fresh-Honey-3-1391x2088.jpg' },
    { nom: 'Martini', prix: 10, image: 'https://www.sainsburysmagazine.co.uk/media/7427/download/Martini.jpg?v=1' },
    { nom: 'Margarita', prix: 7, image: 'https://www.bellanaijastyle.com/wp-content/uploads/2018/02/dreamstime_classic-margarita-cocktail-bellanaija-style.jpg' },
    { nom: 'Cosmopolitan', prix: 8, image: 'https://dailyappetite.com/wp-content/uploads/2017/05/cosmo-2-scaled-735x821.jpg' },
    { nom: 'Old Fashioned', prix: 6, image: 'https://coolmaterial.com/wp-content/uploads/2022/05/Cold-Brew-Coffee-Negroni.jpg' },
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
  }
}
