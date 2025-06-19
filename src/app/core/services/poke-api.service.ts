import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { PokemonDetails, PokemonListItem } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private baseUrl = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) {}
  getPokemonList(
    offset: number = 0,
    limit: number = 20
  ): Observable<PokemonListItem[]> {
    return this.http
      .get<any>(`${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(map((res) => res.results));
    // const mockData = [
    //   { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
    //   { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
    //   { name: 'venusaur', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
    //   { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
    //   { name: 'charmeleon', url: 'https://pokeapi.co/api/v2/pokemon/5/' },
    //   { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
    //   { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    //   { name: 'wartortle', url: 'https://pokeapi.co/api/v2/pokemon/8/' },
    // ];

    // const pagedData = mockData.slice(offset, offset + limit);

    // return of(pagedData).pipe(delay(500));
  }

  getPokemonDetails(name: string | number): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.baseUrl}/pokemon/${name}`);
    // const mockDetails: PokemonDetails = {
    //   id: 1,
    //   name: 'bulbasaur',
    //   height: 7,
    //   weight: 69,
    //   sprites: {
    //     front_default:
    //       'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    //   },
    //   types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    //   abilities: [
    //     { ability: { name: 'overgrow' } },
    //     { ability: { name: 'chlorophyll' } },
    //   ],
    //   moves: [
    //     { move: { name: 'tackle' } },
    //     { move: { name: 'vine whip' } },
    //     { move: { name: 'razor leaf' } },
    //     { move: { name: 'growth' } },
    //     { move: { name: 'sleep powder' } },
    //     { move: { name: 'solar beam' } },
    //   ],
    // };

    // return of(mockDetails).pipe(delay(500));
  }
}
