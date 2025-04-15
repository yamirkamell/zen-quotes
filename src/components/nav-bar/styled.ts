import styled from 'styled-components';

const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.7s;
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
`;
  
const ContainerSubHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    opacity: 1;
    width: 100%;
    background-color: #4bffff;
    background-image: linear-gradient(315deg, #4bffff 0%, #041649 74%);
    @media (max-width: 720px) {
        justify-content: space-between;
    }
`
    
const LogoApp = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 10px;
    flex: .2;
    @media (max-width: 720px) {
        display:flex;
        flex: .4;
        padding-left: 20px;
    }
`
  
const Menu = styled.div`
    flex: .3;
    display: flex;
    .desk{
        flex: .8;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .mobile{
        display: none;
    }
    @media (max-width: 720px) {
        .desk{
            display:none;
        }
        .mobile{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            width: 100px;
            height: 30px; 
        }
    }
`;

const MenuLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const Divider = styled.div`
    border-top: solid #ffff;
    width: 50px;
    margin-top: 5px;
    box-shadow: 1px 1px 5px #4bffff;
    @media (max-width: 720px) {
        width: 20px;
    }
`;
  
const TextComponent = styled.h1`
    font-size: 12px; 
    font-weight: 600; 
    color: #ffff;
    text-shadow: 1px 1px 5px #4bffff;
    cursor: pointer;
`;

export {
    ContainerMain, 
    ContainerSubHeader,
    LogoApp, 
    Menu,
    MenuLinksContainer, 
    Divider,
    TextComponent,
  };
  