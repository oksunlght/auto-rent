import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import img from '../../images/car-rental.jpg';

export const HomeContainer = styled.div`
  display: block;
  width: 100vh;
  height: 424px;
  margin-left: auto;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  margin-bottom: 50px;

  color: var(--main-text-color);
  font-size: 38px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 17px 70px;
  width: 85px;
  height: auto;

  color: var(--main-white-color);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  background-color: var(--accent-color);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--focus-color);
  }
`;
