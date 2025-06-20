import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {
  closeCircle,
  arrowBackCircleOutline,
  arrowForwardCircleOutline,
  heartOutline,
  arrowUndoOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { PokemonUtilsService } from 'src/app/shared/utils/pokemon-utils.service';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NgIf, FormsModule, LoadingComponent],
})
export class PokemonDetailsPage implements OnInit {
  pokemonName!: string;
  pokemonData!: PokemonDetails;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private pokeApiService: PokeApiService,
    public pokeUtilis: PokemonUtilsService
  ) {
    addIcons({
      heartOutline,
      closeCircle,
      arrowBackCircleOutline,
      arrowForwardCircleOutline,
      arrowUndoOutline,
    });
    this.getFavoritePokemons();
  }

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name')!;
    this.loadPokeDetails();
  }

  getMoves(): string {
    return this.pokemonData.moves
      .slice(0, 6)
      .map((m) => m.move.name)
      .join(', ');
  }

  loadPokeDetails(pokename = this.pokemonName as string) {
    this.pokeApiService.getPokemonDetails(pokename).subscribe({
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
  private favoritePokemonsStorageKey = 'favoritePokemons';

  addToFavorites(pokemon: PokemonDetails) {
    return this.pokeUtilis.addToFavorites(pokemon);
  }

  isFavorite(pokemonId: number): boolean {
    return this.pokeUtilis.isFavorite(pokemonId);
  }

  getFavoritePokemons(): number[] {
    return this.pokeUtilis.getFavoritePokemons();
  }

  getTypeColor(type: string, tailwind = true, wight = 400): string {
    return this.pokeUtilis.getTypeColor(type);
  }
  goBack() {
    this.navCtrl.navigateForward(`/`);
  }

  goToDetails(id: number) {
    this.navCtrl.navigateForward(`/pokemon/details/${id}`);
  }
  getStatColor(statName: string): string {
    return this.pokeUtilis.getStatColor(statName);
  }
}
