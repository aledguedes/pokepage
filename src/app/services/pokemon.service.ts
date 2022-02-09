import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from './api_config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(limit: number, offset: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  }

  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

  getPokemonOfId(id: number){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }
}
