import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCarBrands } from 'redux/selectors';
import { filterCars } from 'redux/carsSlice';
import {
  Form,
  LabelFrom,
  InputFrom,
  LabelTo,
  InputTo,
  FormTitle,
  SearchBtn,
} from './FilterMileage.styled';

const FilterMileage = () => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const cars = useSelector(selectCarBrands);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    const formattedValue = value.toLocaleString();

    switch (name) {
      case 'from':
        setFromValue(formattedValue);
        break;
      case 'to':
        setToValue(formattedValue);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const filteredCars = cars.filter(
      ({ mileage }) => mileage < toValue && mileage > fromValue
    );
    dispatch(filterCars(filteredCars));
    setFromValue('');
    setToValue('');
  };

  return (
    <div>
      <FormTitle>Сar mileage / km</FormTitle>
      <Form onSubmit={handleSubmit}>
        <LabelFrom htmlFor="from">From</LabelFrom>
        <InputFrom
          type="number"
          name="from"
          value={fromValue}
          onChange={handleChange}
        />

        <LabelTo htmlFor="to">To</LabelTo>
        <InputTo
          type="number"
          name="to"
          value={toValue}
          onChange={handleChange}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </Form>
    </div>
  );
};

export default FilterMileage;
