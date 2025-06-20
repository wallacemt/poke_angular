import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { NavController } from '@ionic/angular';
import { PokeCardComponent } from 'src/app/shared/poke-card/poke-card.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.page.html',
  styleUrls: ['./pokemon-favorites.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PokeCardComponent,
    LoadingComponent,
    HeaderComponent,
    LoadingComponent,
    NgIf,
  ],
})
export class PokemonFavoritesPage implements OnInit {
  favoritesPokemons: any[] = [];
  isLoading: boolean = true;
  constructor(
    private navCtrl: NavController,
    private apiService: PokeApiService
  ) {}

  ngOnInit() {
    this.loadFavorites();
  }

  loadFavorites() {
    const storedIds: number[] = JSON.parse(
      localStorage.getItem('favoritePokemons') || '[]'
    );
    this.favoritesPokemons = [];

    storedIds.forEach((id) => {
      this.apiService.getPokemonDetails(id).subscribe({
        next: (data) => {
          this.favoritesPokemons.push(data);
          this.isLoading = false;
        },
        error: (error) => {
          console.log('Erro ao carregar detalhes do pokemon', error);
          this.isLoading = false;
        },
      });
    });
  }
  goHome() {
    this.navCtrl.navigateForward('/');
  }
  goToDetails(pokemon: string) {
    this.navCtrl.navigateForward(['pokemon/details', pokemon]);
  }
}
