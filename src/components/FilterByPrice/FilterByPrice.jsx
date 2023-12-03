import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectCarBrands } from 'redux/selectors';
import { filterCars } from 'redux/carsSlice';
import sprite from '../../images/sprite.svg';
import carsOperations from 'redux/operations';
import {
  DropContainer,
  DropIcon,
  DropBtn,
  Input,
  BrandLabel,
  LabelWrapper,
  BrandList,
  BrandListItem,
  BrandBtn,
  CloseBtn,
  CloseIcon,
  BtnContainer,
} from './FilterByPrice.styled';

const FilterByPrice = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [priceFilter, setPriceFilter] = useState('');
  const [isFilterEmpty, setIsFilterEmpty] = useState(true);
  const cars = useSelector(selectCarBrands);
  const dispatch = useDispatch();

  let priceLimit = [];

  const number = 450;
  for (let i = 10; i <= number; i += 10) {
    console.log(i);
    if (priceLimit.includes(i)) {
      break;
    }
    priceLimit.push(i);
  }

  const handleClickDown = () => {
    if (isListOpen) {
      setIsListOpen(false);
      return;
    }
    setIsListOpen(true);
  };

  const onPriceSelect = e => {
    e.preventDefault();
    const selectedPrice = e.currentTarget.closest('li').dataset.item;

    setPriceFilter(selectedPrice);

    if (selectedPrice === '') {
      return;
    }

    const filteredCars = cars.filter(
      ({ rentalPrice }) =>
        Number(rentalPrice.match(/(\d+)/)[0]) <= Number(selectedPrice)
    );

    dispatch(filterCars(filteredCars));
    setIsListOpen(false);
    setIsFilterEmpty(false);
  };

  const handleBtnText = () =>
    priceFilter === '' ? 'To $' : `To ${priceFilter} $`;

  const handleFilter = e => {
    setPriceFilter('');
    setIsFilterEmpty(true);

    dispatch(carsOperations.fetchAds({ p: 1, l: 12 }));
  };

  return (
    <DropContainer>
      <LabelWrapper>
        <BrandLabel>
          Price/ 1 hour
          <Input type="button">{handleBtnText()}</Input>
        </BrandLabel>
        <BtnContainer>
          <DropBtn type="button" onClick={handleClickDown}>
            {isListOpen ? (
              <DropIcon width="20" height="20">
                <use href={sprite + '#icon-up'}></use>
              </DropIcon>
            ) : (
              <DropIcon width="20" height="20">
                <use href={sprite + '#icon-down'}></use>
              </DropIcon>
            )}
          </DropBtn>
          {!isFilterEmpty && (
            <CloseBtn type="button" onClick={handleFilter}>
              <CloseIcon width="17" height="17">
                <use href={sprite + '#close_icon'}></use>
              </CloseIcon>
            </CloseBtn>
          )}
        </BtnContainer>
      </LabelWrapper>
      {isListOpen && (
        <BrandList>
          {priceLimit.map(item => (
            <BrandListItem key={nanoid()} data-item={item}>
              <BrandBtn type="button" onClick={onPriceSelect}>
                {item}
              </BrandBtn>
            </BrandListItem>
          ))}
        </BrandList>
      )}
    </DropContainer>
  );
};

export default FilterByPrice;
