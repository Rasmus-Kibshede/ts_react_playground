import React, { useEffect, useState } from 'react'
import { fetchPokemonList } from '../api/pokemon'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Pokemon } from '../types/datatypes';
import { useNavigate } from 'react-router-dom';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const loadPokemon = async () => {
    const response = await fetchPokemonList();
    setPokemon(response);
  }

  const navigate = useNavigate();

  const navigateToPage = (page: string) => {
    navigate(page.toLocaleLowerCase());
  }

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <>
      {pokemon.map((p) => (
        <Card sx={{ maxWidth: 345 }} key={p.id}>
          <CardActionArea onClick={() => navigateToPage(p.name)}>
            <CardMedia
              component="img"
              height="140"
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
      ))}
    </>
  )
}

export default Pokedex