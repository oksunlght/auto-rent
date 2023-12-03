import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';
import { selectSelectedCar } from 'redux/selectors';
import ModalStyles from './Modal.slyled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onModalClose]);

  const selectedCar = useSelector(selectSelectedCar);

  const {
    address,
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    type,
    mileage,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = selectedCar[0];

  const transformedMileage = mileage.toLocaleString();

  const addressData = address.split(',');
  const country = addressData[addressData.length - 1];
  const city = addressData[addressData.length - 2];

  const splitRentalConditions = rentalConditions.split(',');

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  return createPortal(
    <ModalStyles.Overlay onClick={handleBackdropClick}>
      <ModalStyles.ModalContainer>
        <ModalStyles.CloseBtn type="button" onClick={onModalClose}>
          <ModalStyles.CloseIcon width="24" height="24">
            <use href={sprite + '#close-btn'}></use>
          </ModalStyles.CloseIcon>
        </ModalStyles.CloseBtn>
        <ModalStyles.ModalImg src={img} alt={model} />
        <ModalStyles.InfoWrapper>
          <ModalStyles.Model>
            {make} <ModalStyles.Highlight>{model}</ModalStyles.Highlight>,{' '}
            {year}
          </ModalStyles.Model>
          <ModalStyles.CarInfo>
            <ModalStyles.CarInfoItem>{city}</ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>{country}</ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>Id: {id}</ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>Year: {year}</ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>Type: {type}</ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>
              Fuel Consumption: {fuelConsumption}
            </ModalStyles.CarInfoItem>
            <ModalStyles.CarInfoItem>
              Engine Size: {engineSize}
            </ModalStyles.CarInfoItem>
          </ModalStyles.CarInfo>
          <ModalStyles.Description>{description}</ModalStyles.Description>
          <ModalStyles.Specs>
            Accessories and functionalities:
          </ModalStyles.Specs>
          <ModalStyles.SpecsList>
            {accessories.map(item => (
              <ModalStyles.SpecsItem key={nanoid(5)}>
                {item}
              </ModalStyles.SpecsItem>
            ))}
            {functionalities.map(item => (
              <ModalStyles.SpecsItem key={nanoid(5)}>
                {item}
              </ModalStyles.SpecsItem>
            ))}
          </ModalStyles.SpecsList>
          <ModalStyles.Specs>Rental Conditions:</ModalStyles.Specs>
          <ModalStyles.RentalConds>
            {splitRentalConditions.map(item => {
              if (item.includes('age')) {
                const splitItem = item.split(' ');
                const itemText = splitItem
                  .slice(0, splitItem.length - 1)
                  .join(' ');

                const age = splitItem[splitItem.length - 1];

                return (
                  <ModalStyles.CondsItem key={nanoid()}>
                    {itemText}
                    <ModalStyles.Highlight> {age}</ModalStyles.Highlight>
                  </ModalStyles.CondsItem>
                );
              } else {
                return (
                  <ModalStyles.CondsItem key={nanoid()}>
                    {item}
                  </ModalStyles.CondsItem>
                );
              }
            })}
            <ModalStyles.CondsItem>
              Mileage:
              <ModalStyles.Highlight>
                {' '}
                {transformedMileage}
              </ModalStyles.Highlight>
            </ModalStyles.CondsItem>
            <ModalStyles.CondsItem>
              Price:
              <ModalStyles.Highlight> {rentalPrice}</ModalStyles.Highlight>
            </ModalStyles.CondsItem>
          </ModalStyles.RentalConds>
          <ModalStyles.RentLink href="tel:+380730000000">
            Rental car
          </ModalStyles.RentLink>
        </ModalStyles.InfoWrapper>
      </ModalStyles.ModalContainer>
    </ModalStyles.Overlay>,
    modalRoot
  );
};

export default Modal;
