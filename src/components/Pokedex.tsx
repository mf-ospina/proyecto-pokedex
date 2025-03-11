//import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { AllPokemon } from "../types";

//Componente
const Pokedex: React.FC = () => {
  //consulta - PokemonData tipado de la interfaz
  const { loading, error, data } = useQuery<AllPokemon>(GET_POKEMONS);

  //id de cada pokemon
  

  if (loading) return <p>Cargando...</p>;
  if (error || !data || !data.pokemon_v2_pokemon) return <p>No se pudieron obtener lps datos</p>;

  return (
    <div>
      <h1>Pokédex</h1>

      <ul>
        {data.pokemon_v2_pokemon.map((pokemon) => (
          <li key={pokemon.id}>
            <p>{pokemon.name}</p>
            
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Pokedex;
