import styled from '@emotion/styled';

export const DropContainer = styled.div`
  position: relative;
`;

export const LabelWrapper = styled.div`
  position: relative;
  display: block;
  width: 153px;
`;

export const BrandLabel = styled.p`
  display: flex;
  flex-direction: column;

  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const Input = styled.button`
  margin-top: 8px;
  padding: 14px 18px;
  width: 145px;
  height: 48px;

  color: var(--main-text-color);
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  border: none;
  border-radius: 14px;
  background-color: var(--drop-color);

  &::placeholder {
    color: var(--main-text-color);
    font-weight: 500;
    font-size: 18px;
    line-height: 1.11;
    opacity: 1;
  }
`;

export const DropBtn = styled.button`
  position: absolute;
  bottom: 14px;
  right: 25px;

  width: 20px;
  height: 20px;

  color: var(--main-text-color);
  background-color: var(--drop-color);

  cursor: pointer;
`;

export const DropIcon = styled.svg`
  stroke: currentColor;
  fill: transparent;
`;

export const BrandList = styled.ul`
  position: absolute;
  bottom: -1px;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 120px;
  height: 272px;
  padding: 14px 8px 14px 18px;

  overflow-y: scroll;

  transform: translateY(100%);

  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);

  background-color: var(--main-white-color);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  z-index: 100;
`;

export const BrandListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const BrandBtn = styled.button`
  color: rgba(18, 20, 23, 0.2);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  background-color: transparent;
  cursor: pointer;
`;

export const CloseBtn = styled.button`
  position: absolute;
  bottom: 20px;
  right: 48px;

  width: 14px;
  height: 14px;

  color: var(--main-text-color);
  background-color: transparent;

  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  stroke: currentColor;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
