import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '../api/pokemon'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Pagination, Stack, Typography } from '@mui/material';
import { Pokemon } from '../types/datatypes';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [pagination, setPagination] = useState<number>(0);

  const loadPokemon = async () => {
    const response = await fetchPokemonList(pagination);
    console.log(pagination);
    setPokemon(response);
    console.log(<Outlet></Outlet>);

  }

  const navigate = useNavigate();

  const navigateToPage = (page: string) => {
    navigate(page.toLocaleLowerCase());
  }

  useEffect(() => {
    loadPokemon();
  }, [pagination]);

  return (
    <>
      <Box sx={{ width: '100%', margin: '20px 0px' }}>
        <Grid container rowSpacing={10}>
          {pokemon.map((p) => (
            <Grid item xs={3} key={p.id} maxWidth={10}>
              <Card className='max-w-sm m-auto'>
                <CardActionArea onClick={() => navigateToPage(`/pokedex/${p.name}`)}>
                  <CardMedia
                    component="img"
                    height="50px"
                    src={p.sprites.front_default}
                    alt={'pokemon ' + p.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Weight: {p.weight} pounds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Height: {p.height} feet
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
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