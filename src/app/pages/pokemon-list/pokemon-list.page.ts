import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { PokemonDetailsPage } from '../pokemon-details/pokemon-details.page';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NgFor, FormsModule],
})
export class PokemonListPage implements OnInit {
  pokemons: PokemonDetails[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;
  searchTerm = '';
  filteredPokemons: PokemonDetails[] = [];
  constructor(
    private pokeApiService: PokeApiService,
    private navCtrl: NavController,
    private routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading = true;

    this.pokeApiService.getPokemonList(this.offset, this.limit).subscribe({
      next: (data) => {
        const detailRequests = data.map((pokemon) =>
          this.pokeApiService.getPokemonDetails(pokemon.name)
        );

        forkJoin(detailRequests).subscribe({
          next: (pokemonDetailsList) => {
            this.pokemons = pokemonDetailsList;
            this.filteredPokemons = [...this.pokemons];
            this.isLoading = false;
          },
          error: (err) => {
            console.error('Erro ao carregar detalhes dos pokémons:', err);
            this.isLoading = false;
          },
        });
      },
      error: (err) => {
        console.error('Erro ao buscar lista de pokémons:', err);
        this.isLoading = false;
      },
    });
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  goToDetails(pokemon: string) {
    this.navCtrl.navigateForward(`/pokemon-details/${pokemon}`);
  }
  onSearchChange() {
    if (this.searchTerm === '') {
      this.filteredPokemons = this.pokemons;
      return;
    }
    this.isLoading = true;
    this.pokeApiService
      .getPokemonDetails(this.searchTerm.toLocaleLowerCase())
      .subscribe({
        next: (data) => {
          this.filteredPokemons = [data];
          this.isLoading = false;
        },
        error: (error) => {
          console.log('Erro ao carregar detalhes do pokemon', error);
          this.isLoading = false;
        },
      });
  }

  nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  prevPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  getTypeColor(type: string): string {
    const colors: Record<string, string> = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-500',
      grass: 'bg-green-500',
      ice: 'bg-blue-500',
      fighting: 'bg-red-500',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-500',
      flying: 'bg-indigo-500',
      psychic: 'bg-pink-500',
      bug: 'bg-green-500',
      rock: 'bg-yellow-500',
      ghost: 'bg-purple-500',
      dragon: 'bg-indigo-500',
      dark: 'bg-gray-500',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-500',
    };
    return colors[type] || 'gray';
  }
}
