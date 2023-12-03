import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;

export const ListItem = styled.li`
  position: relative;
  width: 275px;
`;

export const CarImage = styled.img`
  width: 274px;
  height: 268px;
  margin-bottom: 14px;

  border-radius: 14px;
`;

export const MoreBtn = styled.button`
  padding: 12px 99px;

  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 12px;
  background-color: #3470ff;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const MainDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  width: 275px;
`;

export const ModelName = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const Price = styled.p`
  margin-right: 8px;
`;

export const CarSpects = styled.p`
  margin-bottom: 28px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const FavBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  color: #fff;
  background-color: transparent;
  cursor: pointer;
`;

export const EmptyList = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: rgba(18, 20, 23, 0.5);
  text-align: center;
`;
