import styled from '@emotion/styled';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--shadow-text-color);
`;

const Highlight = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;

const ModalContainer = styled.div`
  position: relative;
  padding: 40px;
  //   width: 541px;
  width: 465px;
  height: auto;

  background-color: var(--main-white-color);
  border-radius: 24px;
`;

const ModalImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 14px;

  width: 461px;
  height: 248px;

  border-radius: 14px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  cursor: pointer;
  background-color: transparent;
`;

const CloseIcon = styled.svg`
  stroke: var(--main-text-color);
`;

const InfoWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 461px;
`;

const Model = styled.p`
  margin-bottom: 8px;

  font-size: 18px;
  color: var(--main-text-color);
  line-height: 1.33;
  font-weight: 500;
`;

const CarInfo = styled.p`
  //   width: 290px;
  width: 461px;
  margin-bottom: 14px;
  //   padding-right: 189px;

  color: var(--shadow-text-color);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
`;

const CarInfoItem = styled.span`
  position: relative;
  margin-left: 6px;

  overflow-wrap: normal;

  &:not(:last-child) {
    margin-right: 6px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -6px;
    bottom: 0;
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    overflow-wrap: normal;
  }
`;

const Description = styled.p`
  width: 461px;
  margin-bottom: 24px;

  color: var(--main-text-color);
  font-size: 14px;
  text-align: left;
  line-height: 1.43;
`;

const Specs = styled.p`
  margin-bottom: 8px;
  color: var(--main-text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

const SpecsList = styled.ul`
  margin-bottom: 24px;
`;

const SpecsItem = styled.li`
  display: inline-block;
  position: relative;
  margin-left: 6px;

  color: var(--shadow-text-color);
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  overflow-wrap: normal;

  &:not(:last-child) {
    margin-right: 6px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -6px;
    bottom: 0;
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    overflow-wrap: normal;
  }
`;

const RentalConds = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 461px;
  margin-bottom: 24px;
`;

const CondsItem = styled.p`
  padding: 7px 14px;

  color: #363535;
  font-size: 12px;
  line-height: 1.5;

  border-radius: 35px;
  background-color: #f9f9f9;
`;

const RentLink = styled.a`
  display: block;
  padding: 12px 14px;
  width: 168px;
  height: auto;

  color: var(--main-white-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  text-align: center;
  text-decoration: none;
  background-color: var(--accent-color);
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--focus-color);
  }
`;

const ModalStyles = {
  Overlay,
  ModalContainer,
  ModalImg,
  CloseBtn,
  CloseIcon,
  InfoWrapper,
  Model,
  Highlight,
  CarInfo,
  CarInfoItem,
  Description,
  Specs,
  SpecsList,
  SpecsItem,
  RentalConds,
  CondsItem,
  RentLink,
};

export default ModalStyles;
