import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  pokemon: any = {}
  id: any

  constructor(
    private data: PokemonService,
    private actvRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.pokemon.id = this.actvRouter.snapshot.paramMap.get('id')
    //this.getPokemonOfId()
  }

  /* getPokemonOfId() {
    this.data.getPokemonOfId(this.pokemon.id).subscribe(res => {
      console.log(this.pokemon)
    });
  } */
}
