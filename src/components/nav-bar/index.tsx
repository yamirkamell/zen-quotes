import { useNavigate, useLocation  } from 'react-router-dom';
import { ContainerMain, ContainerSubHeader, Divider, LogoApp, Menu, MenuLinksContainer, TextComponent } from './styled';
import { FaShareFromSquare } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

const links = [
  {
    label: 'HOME',
    ico: <AiFillHome size={20}/>,
    route: ''
  }, 
  {
    label: 'SHARED PHRASES',
    ico: <FaShareFromSquare size={20}/>,
    route: 'shared-phrases'
  }
]

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const HandleRedirectUrl = (url: string) => {
    navigate(url);
  }

  return (
    <ContainerMain>
      <ContainerSubHeader>
        <LogoApp>
          <span style={{color: '#fff'}}> Zen Quotes </span>
        </LogoApp>
        <Menu>
          <div className='desk'>
            {links.map(({ label, route }) => (
              <MenuLinksContainer key={route} onClick={()=>{HandleRedirectUrl(`/${route}`)}}>
                { label !== 'home' ?
                  <>
                    <TextComponent>
                      {label}
                    </TextComponent>
                    { location.pathname === `/${route}`
                      ? <Divider></Divider>
                      : null
                    }
                  </>
                  : null
                }
              </MenuLinksContainer>
            ))}
          </div>
          <div className='mobile'>
            {links.map(({ ico, route }) => (
              <MenuLinksContainer key={route} onClick={()=>{HandleRedirectUrl(`/${route}`)}}>
                  <>
                    <TextComponent>
                      {ico}
                    </TextComponent>
                    { location.pathname === `/${route}`
                      ? <Divider></Divider>
                      : null
                    }
                  </>
              </MenuLinksContainer>
            ))}
          </div>
        </Menu>
      </ContainerSubHeader>
  </ContainerMain >
  );
};

export default NavBar;
