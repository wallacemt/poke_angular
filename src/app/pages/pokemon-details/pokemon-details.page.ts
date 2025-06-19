import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    NgIf,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    FormsModule,
  ],
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

  getTypes(): string {
    return this.pokemonData.types.map((t) => t.type.name).join(', ');
  }

  getAbilities(): string {
    return this.pokemonData.abilities.map((a) => a.ability.name).join(', ');
  }

  getMoves(): string {
    return this.pokemonData.moves
      .slice(0, 6)
      .map((m) => m.move.name)
      .join(', ');
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
