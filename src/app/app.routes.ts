import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemon',
    pathMatch: 'full',
  },
  {
    path: 'pokemon',
    loadComponent: () =>
      import('./pages/pokemon-list/pokemon-list.page').then(
        (m) => m.PokemonListPage
      ),
  },
  {
    path: 'pokemon/details/:name',
    loadComponent: () =>
      import('./pages/pokemon-details/pokemon-details.page').then(
        (m) => m.PokemonDetailsPage
      ),
  },
  {
    path: 'pokemon/favorites',
    loadComponent: () =>
      import('./pages/pokemon-favorites/pokemon-favorites.page').then(
        (m) => m.PokemonFavoritesPage
      ),
  },
];
