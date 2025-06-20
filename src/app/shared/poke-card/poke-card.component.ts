import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { heartOutline } from 'ionicons/icons';

import { PokemonUtilsService } from '../utils/pokemon-utils.service';
import { LoadingComponent } from '../loading/loading.component';
@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],

  standalone: true,
  imports: [CommonModule, IonicModule, NgIf, FormsModule, LoadingComponent],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: PokemonDetails;
  @Input() isLoading: boolean = false;
  @Output() cardClick = new EventEmitter<string>();

  getTypeColor(type: string): string {
    return this.pokeDetails.getTypeColor(type);
  }
  onCardClick() {
    this.cardClick.emit(this.pokemon.name);
  }
  constructor(public pokeDetails: PokemonUtilsService) {
    addIcons({
      heartOutline,
    });
  }
  ngOnInit() {}

  getIsFavorite(): boolean {
    return this.getFavoritePokemons().includes(this.pokemon?.id);
  }

  private getFavoritePokemons(): number[] {
    return this.pokeDetails.getFavoritePokemons();
  }

  addToFavorites(event: MouseEvent) {
    event.stopPropagation();
    return this.pokeDetails.addToFavorites(this.pokemon);
  }
}
