import { useSelector, useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import { selectAds, selectFavorite } from 'redux/selectors';
import { onCarSelect, addFavorite, removeFavorite } from 'redux/carsSlice';
import {
  CardContainer,
  CarImage,
  MoreBtn,
  MainDescription,
  ModelName,
  Model,
  CarSpects,
  FavBtn,
  Price,
} from './CarCard.styled';

const CarCard = ({ handleModalOpen }) => {
  const dispatch = useDispatch();
  const carAds = useSelector(selectAds);
  const favoriteCars = useSelector(selectFavorite);

  const selectStyle = id => {
    const favCarsIds = favoriteCars.flatMap(car => car.id);

    if (favCarsIds.includes(id)) {
      const favIconStyleActive = {
        stroke: '#3470ff',
        fill: '#3470ff',
      };
      return favIconStyleActive;
    }
    const favIconStyle = {
      stroke: 'currentColor',
      fill: 'transparent',
    };

    return favIconStyle;
  };

  const handleSelectedCar = e => {
    const carId = e.currentTarget.dataset.id;

    const carData = carAds.filter(car => car.id === Number(carId));

    dispatch(onCarSelect(carData));

    handleModalOpen();
  };

  const handleAddFavorite = e => {
    const carId = Number(e.currentTarget.dataset.id);
    const selectedCard = e.target;
    const carData = carAds.filter(car => car.id === carId);
    const favIdList = favoriteCars.flatMap(car => car.id);

    if (favIdList.includes(carId)) {
      favoriteCars.filter(
        car => car.id === carId && dispatch(removeFavorite(carId))
      );
      unselectFavorite(selectedCard);
      return;
    }

    setActiveStyle(selectedCard);
    dispatch(addFavorite(carData));
  };

  const setActiveStyle = card => {
    card.style.stroke = '#3470ff';
    card.style.fill = '#3470ff';
  };

  const unselectFavorite = card => {
    card.style.stroke = 'currentColor';
    card.style.fill = 'transparent';
  };

  return carAds.map(
    ({
      address,
      id,
      img,
      model,
      make,
      year,
      rentalPrice,
      rentalCompany,
      type,
      mileage,
      functionalities,
    }) => {
      const addressData = address.split(',');
      const country = addressData[addressData.length - 1];
      const city = addressData[addressData.length - 2];

      return (
        <CardContainer key={id}>
          <FavBtn type="button" data-id={id} onClick={handleAddFavorite}>
            <svg style={selectStyle(id)} width="18" height="18">
              <use href={sprite + '#fav-icon'}></use>
            </svg>
          </FavBtn>
          <CarImage src={img} alt={model} />
          <div>
            <MainDescription>
              <ModelName>
                {make} <Model>{model}</Model>, {year}
              </ModelName>
              <Price>{rentalPrice}</Price>
            </MainDescription>
            <div>
              <CarSpects>
                {city} | {country} | {rentalCompany} | {type} | {model} |{' '}
                {mileage.toLocaleString()} | {functionalities[0]}
              </CarSpects>
            </div>
          </div>
          <MoreBtn type="button" data-id={id} onClick={handleSelectedCar}>
            Learn more
          </MoreBtn>
        </CardContainer>
      );
    }
  );
};

export default CarCard;
