import { CardActionArea, CardMedia, CardContent, Card, Typography } from '@mui/material'
import { Pokemon } from '../../types/datatypes'

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
    return (
        <Card className='max-w-sm m-auto'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="50px"
                    src={pokemon.sprites.front_default}
                    alt={'pokemon ' + pokemon.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Weight: {pokemon.weight} pounds
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Height: {pokemon.height} feet
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PokemonCard