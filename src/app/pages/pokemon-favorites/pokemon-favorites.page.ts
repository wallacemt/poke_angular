import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-pokemon-favorites',
  templateUrl: './pokemon-favorites.page.html',
  styleUrls: ['./pokemon-favorites.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonicModule,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class PokemonFavoritesPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
