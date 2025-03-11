export interface Pokemon {
  id: number;
  name: string;
  height: number;
}

export interface AllPokemon {
  pokemon_v2_pokemon: {
    id: number;
    name: string;
    height: number;
  }[];
}
