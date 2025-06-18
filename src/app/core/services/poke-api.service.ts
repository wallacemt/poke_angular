import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
  }

  getPokemonDetails(name: string): Observable<PokemonDetails>{
    return this.http
      .get<PokemonDetails>(`${this.baseUrl}/pokemon/${name}`);
  }
}
