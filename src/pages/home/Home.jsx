// import { Link } from 'react-router-dom';
import { HomeContainer, Title, StyledLink } from './Home.styled';

const Home = () => {
  return (
    <div>
      <Title>Cars for rent</Title>
      <HomeContainer></HomeContainer>
      <StyledLink to="/catalog">To catalog</StyledLink>
    </div>
  );
};

export default Home;
