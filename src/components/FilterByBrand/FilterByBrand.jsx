import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import sprite from '../../images/sprite.svg';
import { selectCarBrands } from 'redux/selectors';
import carsOperations from 'redux/operations';
import { filterCars } from 'redux/carsSlice';
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
} from './FilterByBrand.styled';

const FilterByBrand = () => {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isFilterEmpty, setIsFilterEmpty] = useState(true);
  const [filter, setFilter] = useState('');
  const cars = useSelector(selectCarBrands);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleSubmit = e => {
      if (e.code === 'Enter') {
        dispatch(carsOperations.fetchAds({ filter: e.target.value }));
      }
    };

    window.addEventListener('keydown', handleSubmit);

    return () => window.removeEventListener('keydown', handleSubmit);
  }, [dispatch]);

  const carBrands = cars.flatMap(car => car.make);
  const uniqueBrands = carBrands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );

  const handleClickDown = () => {
    if (isListOpen) {
      setIsListOpen(false);
      return;
    }
    setIsListOpen(true);
  };

  const onBrandSelect = e => {
    const selectedBrand = e.currentTarget.closest('li').dataset.item;
    console.log(selectedBrand);

    if (selectedBrand === '') {
      return;
    }

    setFilter(selectedBrand);
    setIsFilterEmpty(false);

    setIsListOpen(false);

    const filteredCars = cars.filter(car =>
      car.make.toLowerCase().includes(selectedBrand.toLowerCase())
    );

    dispatch(filterCars(filteredCars));
  };

  const onInputChange = e => {
    if (e.currentTarget.value === '') {
      setFilter('');
      setIsFilterEmpty(true);
      return;
    }
    setFilter(e.currentTarget.value);
    setIsFilterEmpty(false);
  };

  const onFocusChange = e => {
    if (e.target.value === '') {
      dispatch(carsOperations.fetchAds({ p: 1, l: 12 }));
      setIsFilterEmpty(true);
      return;
    }
    if (filter === '') {
      return;
    }
    const filteredCars = cars.filter(car =>
      car.make.toLowerCase().includes(filter.toLowerCase())
    );

    dispatch(filterCars(filteredCars));
  };

  const handleFilter = e => {
    setFilter('');
    setIsFilterEmpty(true);
    dispatch(carsOperations.fetchAds({ p: 1, l: 12 }));
  };

  return (
    <DropContainer>
      <LabelWrapper>
        <BrandLabel>
          Car brand
          <Input
            type="text"
            placeholder="Enter the text"
            value={filter}
            id="input"
            onChange={onInputChange}
            onBlur={onFocusChange}
          />
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
          {uniqueBrands.map(item => (
            <BrandListItem key={nanoid()} data-item={item}>
              <BrandBtn type="button" onClick={onBrandSelect}>
                {item}
              </BrandBtn>
            </BrandListItem>
          ))}
        </BrandList>
      )}
    </DropContainer>
  );
};

export default FilterByBrand;
