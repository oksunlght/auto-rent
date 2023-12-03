import styled from '@emotion/styled';

export const AdsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  gap: 50px 29px;
`;

export const MoreBtn = styled.button`
  margin-right: auto;
  margin-left: auto;

  color: #3470ff;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
`;

export const EmptyList = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
`;
