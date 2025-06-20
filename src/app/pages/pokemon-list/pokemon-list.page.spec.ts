import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { PokeCardComponent } from 'src/app/shared/poke-card/poke-card.component';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { PokemonListPage } from './pokemon-list.page';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { NavController } from '@ionic/angular';

describe('PokemonListPage', () => {
  let component: PokemonListPage;
  let fixture: ComponentFixture<PokemonListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IonicModule,
        NgFor,
        FormsModule,
        HeaderComponent,
        PokeCardComponent,
        LoadingComponent,
        HttpClientTestingModule,
      ],
      providers: [PokeApiService, NavController],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

