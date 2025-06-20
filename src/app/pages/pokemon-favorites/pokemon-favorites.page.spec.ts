import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonFavoritesPage } from './pokemon-favorites.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PokeApiService } from 'src/app/core/services/poke-api.service';

describe('PokemonFavoritesPage', () => {
  let component: PokemonFavoritesPage;
  let fixture: ComponentFixture<PokemonFavoritesPage>;
  let apiService: PokeApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PokemonFavoritesPage],
      providers: [PokeApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonFavoritesPage);
    component = fixture.componentInstance;
    apiService = TestBed.inject(PokeApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

