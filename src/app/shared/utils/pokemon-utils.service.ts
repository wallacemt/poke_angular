import { Injectable } from '@angular/core';
import { PokemonDetails } from '../../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonUtilsService {
  private favoritePokemonsStorageKey = 'favoritePokemons';

  constructor() {}
  addToFavorites(pokemon: PokemonDetails) {
    let favorites: number[] = this.getFavoritePokemons();
    if (favorites && !favorites.includes(pokemon.id)) {
      favorites.push(pokemon.id);
    } else {
      favorites = favorites.filter((id) => id !== pokemon.id);
    }

    localStorage.setItem(
      this.favoritePokemonsStorageKey,
      JSON.stringify(favorites)
    );
  }

  isFavorite(pokemonId: number): boolean {
    return this.getFavoritePokemons().includes(pokemonId);
  }

  getFavoritePokemons(): number[] {
    const storedFavorites = localStorage.getItem(
      this.favoritePokemonsStorageKey
    )
      ? localStorage.getItem(this.favoritePokemonsStorageKey)
      : localStorage.setItem(this.favoritePokemonsStorageKey, '[]');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
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
