import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemonName!: string;
  pokemonData!: PokemonDetails;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;
    this.loadPokeDetails();
  }

  loadPokeDetails() {
    this.pokeApiService.getPokemonDetails(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemonData = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.log('Erro ao carregar detalhes do pokemon', error);
        this.isLoading = false;
      },
    });
  }
}
