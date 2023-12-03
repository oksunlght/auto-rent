import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import img from '../../images/car-rental.jpg';

export const HomeContainer = styled.div`
  display: block;
  width: 100vh;
  height: 424px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Title = styled.h1`
  margin-bottom: 50px;

  color: #121417;
  font-size: 36px;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 17px 70px;
  width: 85px;
  height: auto;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  background-color: #3470ff;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
