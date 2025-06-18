import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pokemon-list',
    loadComponent: () => import('./pages/pokemon-list/pokemon-list.page').then( m => m.PokemonListPage)
  },
  {
    path: 'pokemon-details',
    loadComponent: () => import('./pages/pokemon-details/pokemon-details.page').then( m => m.PokemonDetailsPage)
  },
  {
    path: 'pokemon-favorites',
    loadComponent: () => import('./pages/pokemon-favorites/pokemon-favorites.page').then( m => m.PokemonFavoritesPage)
  },
];
