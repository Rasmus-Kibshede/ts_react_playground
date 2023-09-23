import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchPokemon } from '../../api/pokemon';
import { Pokemon } from '../../types/datatypes';
import PokemonCard from '../../components/PokemonCard/PokemonCard';

export const PokemonInfo = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await fetchPokemon(name || '');
      setPokemon(response);
    }
    loadPokemon();
  }, []);

  return (
    <>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </>
  )
}
