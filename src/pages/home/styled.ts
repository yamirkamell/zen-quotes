import styled from 'styled-components';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    width: 95%;
    height: 50vh;
`;

const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #4bffff;
    border-radius: 10px;
    width: 300px;
    height: 350px;
`;

const PokemonImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 25px;
`;

const ButtonComponent = styled.button`
    width: 120px;
    height: 40px;
    border: none;
    background-color: #4bffff;
    background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
`;

export {
    ContainerMain,
    PokemonContainer,
    PokemonImg,
    ButtonContainer,
    ButtonComponent
  };
  