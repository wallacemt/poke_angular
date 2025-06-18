import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonDetailsPage } from './pokemon-details.page';

describe('PokemonDetailsPage', () => {
  let component: PokemonDetailsPage;
  let fixture: ComponentFixture<PokemonDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
