import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonFavoritesPage } from './pokemon-favorites.page';

describe('PokemonFavoritesPage', () => {
  let component: PokemonFavoritesPage;
  let fixture: ComponentFixture<PokemonFavoritesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
