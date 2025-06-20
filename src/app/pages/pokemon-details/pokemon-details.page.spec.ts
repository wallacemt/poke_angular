import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/core/services/poke-api.service';
import { of } from 'rxjs';
import { PokemonDetailsPage } from './pokemon-details.page';

describe('PokemonDetailsPage', () => {
  let component: PokemonDetailsPage;
  let fixture: ComponentFixture<PokemonDetailsPage>;
  let mockNavCtrl: jasmine.SpyObj<NavController>;
  let mockPokeApiService: jasmine.SpyObj<PokeApiService>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockNavCtrl = jasmine.createSpyObj('NavController', [
      'navigateBack',
      'navigateForward',
    ]);
    mockPokeApiService = jasmine.createSpyObj('PokeApiService', [
      'getPokemonDetails',
    ]);
    mockActivatedRoute = {
      snapshot: { paramMap: { get: () => 'pikachu' } }
    };
    
    await TestBed.configureTestingModule({
      imports: [PokemonDetailsPage],
      providers: [
        { provide: NavController, useValue: mockNavCtrl },
        { provide: PokeApiService, useValue: mockPokeApiService },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(mockNavCtrl.navigateForward).toHaveBeenCalled();
  });

  it('should return correct type color for known type', () => {
    const color = component.getTypeColor('fire');
    expect(color).toContain('orange');
  });

  it('should call getPokemonDetails on ngOnInit', () => {
    mockPokeApiService.getPokemonDetails.and.returnValue(
      of({ id: 25, name: 'pikachu', types: [] } as any)
    );
    component.ngOnInit();
    expect(mockPokeApiService.getPokemonDetails).toHaveBeenCalled();
  });
});

