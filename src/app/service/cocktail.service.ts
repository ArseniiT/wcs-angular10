import { Injectable } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktails: Cocktail[] = [
    { nom: 'Mojito', prix: 5, image: 'https://www.gimmesomeoven.com/wp-content/uploads/2018/05/How-To-Make-A-Mojito-Recipe-Cocktail-Fresh-Honey-3-1391x2088.jpg' },
    { nom: 'Martini', prix: 10, image: 'https://www.sainsburysmagazine.co.uk/media/7427/download/Martini.jpg?v=1' },
    { nom: 'Margarita', prix: 7, image: 'https://www.bellanaijastyle.com/wp-content/uploads/2018/02/dreamstime_classic-margarita-cocktail-bellanaija-style.jpg' },
    { nom: 'Cosmopolitan', prix: 8, image: 'https://th.bing.com/th/id/R.a0eb4e6b84f80571eaccae5438686c15?rik=0AVA%2ba3QWg4mJA&riu=http%3a%2f%2fesq.h-cdn.co%2fassets%2f15%2f18%2f1430408520-dmg-cosmopolitan-cocktail-001.jpg&ehk=kKmBqZKvd9U0WZfB5ZDZdKPNluqPhYw3TeV3z9bXbRY%3d&risl=&pid=ImgRaw&r=0' },
    { nom: 'Old Fashioned', prix: 6, image: 'https://coolmaterial.com/wp-content/uploads/2022/05/Cold-Brew-Coffee-Negroni.jpg' },
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
  }
}
