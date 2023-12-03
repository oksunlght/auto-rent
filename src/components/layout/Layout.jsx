import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import { Container, Header, StyledLink, Navigation } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <NavLink to="/">
            <svg width="174" height="94">
              <use href={sprite + '#car-logo'}></use>
            </svg>
          </NavLink>
          <div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/catalog">Catalog</StyledLink>
            <StyledLink to="/favorite">Favorite</StyledLink>
          </div>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
    </div>
  );
};

export default Layout;
