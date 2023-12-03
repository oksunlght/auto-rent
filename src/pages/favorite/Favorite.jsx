import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/selectors';
import { removeFavorite } from 'redux/carsSlice';
import sprite from '../../images/sprite.svg';
import {
  List,
  ListItem,
  CarImage,
  MoreBtn,
  MainDescription,
  ModelName,
  Model,
  Price,
  CarSpects,
  FavBtn,
  EmptyList,
} from './Favorite.styled';

const Favorite = () => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorite);

  const handleRemoveFavorite = e => {
    const carId = Number(e.currentTarget.dataset.id);

    dispatch(removeFavorite(carId));
  };

  return favoriteCars.length === 0 ? (
    <EmptyList>No cars yet...</EmptyList>
  ) : (
    <List>
      {favoriteCars.map(
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
            <ListItem key={id}>
              <FavBtn type="button" data-id={id} onClick={handleRemoveFavorite}>
                <svg
                  style={{ stroke: '#3470ff', fill: '#3470ff' }}
                  width="18"
                  height="18"
                >
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
              <MoreBtn type="button" data-id={id}>
                Learn more
              </MoreBtn>
            </ListItem>
          );
        }
      )}
    </List>
  );
};

export default Favorite;
