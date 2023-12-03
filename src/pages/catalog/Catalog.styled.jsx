import styled from '@emotion/styled';

export const AdsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  gap: 50px 29px;

  z-index: 10;
`;

export const MoreBtn = styled.button`
  margin-right: auto;
  margin-left: auto;

  color: var(--accent-color);
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  text-decoration: underline;
  line-height: 1.5;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--focus-color);
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
  color: var(--shadow-text-color);
  text-align: center;
`;
