// import { Link } from 'react-router-dom';
import { HomeContainer, Title, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <div>
      <Title>Rent your car today</Title>
      <HomeContainer></HomeContainer>
      <StyledLink to="/catalog">To the diary </StyledLink>
    </div>
  );
};

export default Home;
