export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  base_experience: number;
  weight: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
      [key: string]: {
        [key: string]: string | null;
      };
    };
  };
  types: {
    slot: number,
    type: {
      name: string;
      url: string
    };
  }[];
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  moves: {
    move: {
      name: string;
       url: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
       url: string;
    };
  }[];
}
