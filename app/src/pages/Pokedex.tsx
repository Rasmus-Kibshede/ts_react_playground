import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '../api/pokemon'
import { Box, Grid, Pagination } from '@mui/material';
import { Pokemon as PokemonDatatype } from '../types/pokemonDatatype';
// import { useNavigate } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import { Link } from 'react-router-dom';

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<PokemonDatatype[]>([]);
  const [pagination, setPagination] = useState<number>(0);

  const loadPokemon = async () => {
    const response = await fetchPokemonList(pagination);
    console.log(pagination);
    setPokemonList(response);
  }

  // const navigate = useNavigate();

  // const navigateToPage = (page: string) => {
  //   navigate(page.toLocaleLowerCase());
  // }

  useEffect(() => {
    loadPokemon();
  }, [pagination]);

  return (
    <>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Grid container rowSpacing={10}>
          {pokemonList.map((p) => (
            <Grid item xs={3} key={p.id} maxWidth={10}>
              <Link to={`/pokedex/${p.name}`}>
                <PokemonCard pokemon={p} />
              </Link>
            </Grid>
          ))}
          <Grid>
            <Pagination onChange={(event: React.ChangeEvent<unknown>, page: number) => setPagination(Number((page - 1) + '0'))} count={128} variant="outlined" shape="rounded" size='large' />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Pokedex