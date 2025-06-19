import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonDetails } from 'src/app/models/pokemon.model';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.scss'],

  standalone: true,
  imports: [CommonModule, IonicModule, NgIf, FormsModule],
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: PokemonDetails;
  @Output() cardClick = new EventEmitter<string>();
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
  onCardClick() {
    this.cardClick.emit(this.pokemon.name);
  }
  constructor() {}

  ngOnInit() {}
}
