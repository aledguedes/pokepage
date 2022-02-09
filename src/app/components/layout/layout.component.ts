import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  pokemons: any[] = []
  totalPokemons: any
  page = 1

  constructor(
    private data : PokemonService
  ) { }

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.data.getPokemons(12, this.page + 0).subscribe((res: any) => {
      this.totalPokemons = res.count

      res.results.forEach((result: any) => {
        this.data.getMoreData(result.name).subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse)
          //console.log(this.pokemons)
          //https://www.youtube.com/watch?v=ov9UqIEa8Zs
        })
      });
    })
  }
}
