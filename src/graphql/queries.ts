import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query {
    pokemon_v2_pokemon(limit: 20) {
      id
      name
      height
    }
  }
`;
