import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemons: any
  id: any

  constructor(
    private service: PokemonService,
    private actRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.actRouter.snapshot.paramMap.get('id')
    this.service.getPokemonOfId(this.id).subscribe(resposta => {
      this.pokemons = resposta
      /* console.log(this.id) */
    })
  }

  loadingZero(str: string | number, size: number): string {
    let s = String(str)

    while (s.length < (size || 2)) {
      s = "0" + s
    }
    return s
  }

}
