import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonListItem } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NgFor, FormsModule],
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
    if (this.isLoading) return;

    this.isLoading = true;
    this.pokeApiService.getPokemonList(this.offset, this.limit).subscribe({
      next: (data) => {
        if(data.length === 0 && event){
          event.target.disabled = true;
          
        }
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
