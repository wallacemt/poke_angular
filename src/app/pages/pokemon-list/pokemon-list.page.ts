import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonListItem } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
})
export class PokemonListPage implements OnInit {
  pokemons: PokemonListItem[] = [];
  offset: number = 0;
  limit: number = 20;
  isLoading: boolean = false;

  constructor(
    private pokeApiService: PokeApiService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons(event?: any) {
    this.isLoading = true;
    this.pokeApiService.getPokemonList(this.offset, this.limit).subscribe({
      next: (data) => {
        this.pokemons = [...this.pokemons, ...data];
        this.offset += this.limit;
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
      error: (error) => {
        console.log('Erro ao carregar pokemons', error);
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
      },
    });
  }
  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

  goToDetails(pokemon: PokemonListItem) {
    this.navCtrl.navigateForward(`/pokemon/${pokemon.name}`);
  }
}
