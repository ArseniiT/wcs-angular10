import { Component, OnInit } from '@angular/core';
import { CocktailServiceService } from '../service/cocktail-service.service';
import { Cocktail } from '../model/cocktail.model';

@Component({
  selector: 'app-cocktail-list-component',
  templateUrl: './cocktail-list-component.component.html',
  styleUrls: ['./cocktail-list-component.component.css']
})
export class CocktailListComponentComponent implements OnInit{
  cocktails: Cocktail[] = [];

  constructor(public cocktailServiceService: CocktailServiceService){}

  ngOnInit(): void {
      this.cocktails = this.cocktailServiceService.cocktails;
  }

}
