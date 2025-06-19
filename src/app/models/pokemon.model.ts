export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
        front_default: string; 
    }
    types: {
        type: {
            name: string;
        }
    }[];
    abilities: {
        ability: {
            name: string;
        }
    }[];
    moves: {
        move: {
            name: string;
        }
    }[];
}