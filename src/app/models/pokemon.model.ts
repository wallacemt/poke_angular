export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    sprites: {
        front_default: string;
        outher?: any;
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