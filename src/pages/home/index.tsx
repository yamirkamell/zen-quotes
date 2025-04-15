import React, { useState } from 'react';
import useApi from '../../hooks/useApi';
import { ButtonComponent, ButtonContainer, ContainerMain, PokemonContainer, PokemonImg } from './styled';

const imgPokebola = 'https://w7.pngwing.com/pngs/324/645/png-transparent-pokemon-go-gotcha-video-game-jynx-pokeball-orange-pokemon-technology.png';

export const Home: React.FC = () => {
  const [paginate, setPaginate] = useState<number>(0);
  const { data, loading, error } = useApi(`https://pokeapi.co/api/v2/pokemon?offset=${paginate}&limit=1`, paginate);

  const handleNextPokemon = () => {
    setPaginate(paginate + 1);
  }

  const handlePrevPokemon = () => {
    if(paginate > 0){
      setPaginate(paginate - 1);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (data) {
    return (
      <ContainerMain>
        {data.map((post: any, index) => (
          <PokemonContainer key={index}>
            <PokemonImg src={imgPokebola} alt={`poke-${index}`} />
            <h3>{post.name}</h3>
            <ButtonContainer>
              {paginate > 0 &&
                <ButtonComponent onClick={()=>{ handlePrevPokemon() }}>Prev</ButtonComponent>
              }
              <ButtonComponent onClick={()=>{ handleNextPokemon() }}>Next</ButtonComponent>
            </ButtonContainer>
          </PokemonContainer>
        ))}
      </ContainerMain>
    );
  }

  return null;
};