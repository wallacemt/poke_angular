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
  arrowUndoOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
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
    private pokeApiService: PokeApiService
  ) {
    addIcons({
      closeCircle,
      arrowBackCircleOutline,
      arrowForwardCircleOutline,
      heartOutline,
      arrowUndoOutline
    });
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
  addToFavorites(pokemon: PokemonDetails) {
    const storageKey = 'favoritePokemons';
    const storedFavorites = localStorage.getItem(storageKey);
    let favorites: number[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    if (favorites.includes(pokemon.id)) {
      favorites = favorites.filter((id) => id !== pokemon.id);
      console.log(`Pokémon #${pokemon.id} removido dos favoritos.`);
    } else {
      favorites.push(pokemon.id);
      console.log(`Pokémon #${pokemon.id} adicionado aos favoritos.`);
    }
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }
  isFavorite(pokemonId: number): boolean {
    const storedFavorites = localStorage.getItem('favoritePokemons');
    const favorites: number[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    return favorites.includes(pokemonId);
  }

  getTypeColor(type: string, tailwind = true, wight = 400): string {
    const colors: any = {
      default: { tail: `bg-gray-${wight}`, exadec: '#7F7B76' },
      fire: { tail: `bg-orange-${wight}`, exadec: '#FFC080' },
      water: { tail: `bg-blue-${wight}`, exadec: '#3498DB' },
      grass: { tail: `bg-green-${wight}`, exadec: '#2ECC40' },
      electric: { tail: `bg-yellow-${wight}`, exadec: '#F7DC6F' },
      bug: { tail: `bg-green-${wight}`, exadec: '#8BC34A' },
      normal: { tail: `bg-gray-${wight}`, exadec: ' #BFB0A3' },
      poison: { tail: `bg-purple-${wight}`, exadec: '#9B59B6' },
      ground: { tail: `bg-yellow-${wight}`, exadec: '#F1C40F' },
      flying: { tail: `bg-indigo-${wight}`, exadec: '#7A00E6' },
      psychic: { tail: `bg-pink-${wight}`, exadec: '#EB3B5A' },
      rock: { tail: `bg-yellow-${wight}`, exadec: '#F39C12' },
      ghost: { tail: `bg-purple-${wight}`, exadec: '#6C5CE7' },
      dragon: { tail: `bg-indigo-${wight}`, exadec: '#6600CC' },
      dark: { tail: `bg-gray-${wight}`, exadec: '#222222' },
      steel: { tail: `bg-gray-${wight}`, exadec: '#B1B1B1' },
      fairy: { tail: `bg-pink-${wight}`, exadec: '#E6DAC3' },
      fighting: { tail: `bg-red-${wight}`, exadec: '#E74C3C' },
      ice: { tail: `bg-cyan-${wight}`, exadec: '#00BCD4' },
    };
    return tailwind
      ? colors[type]
        ? colors[type].tail
        : colors.default.tail
      : colors[type]
      ? colors[type].exadec
      : colors.default.exadec;
  }
  goBack() {
    this.navCtrl.navigateForward(`/`);
  }

  goToDetails(id: number) {
    this.navCtrl.navigateForward(`/pokemon/details/${id}`);
  }
  getStatColor(statName: string): string {
    const colors: any = {
      hp: '#48bb78',
      attack: '#f56565',
      defense: '#4299e1',
      'special-attack': '#9f7aea',
      'special-defense': '#ecc94b',
      speed: '#ed64a6',
    };
    return colors[statName.toLowerCase()] || '#cbd5e0';
  }
}
