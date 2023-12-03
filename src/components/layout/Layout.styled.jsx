import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1208px;
  margin: 0 auto;
  padding: 150px 15px;
`;

export const Header = styled.header`
  padding: 8px 20px;
  padding-right: 70px;

  // background-color: #f7f7fb;
  background-color: #3470ff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 14px;

  color: #fff;
  text-decoration: none;

  background-color: #3470ff;

  border-radius: 8px;

  // border: 1px solid #fff;
  box-shadow: 1px 1px 3px #fff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
