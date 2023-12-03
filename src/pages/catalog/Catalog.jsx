import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'react-loader-spinner';
import carsOperations from 'redux/operations';
import { selectIsLoading, selectAds } from 'redux/selectors';
import CarCard from 'components/carCard/CarCard';
import Modal from 'components/Modal/Modal';
import FilterByBrand from 'components/FilterByBrand/FilterByBrand';
import FilterByPrice from 'components/FilterByPrice/FilterByPrice';
import FilterMileage from 'components/FilterMileage/FilterMileage';
import {
  AdsList,
  MoreBtn,
  FiltersContainer,
  EmptyList,
  BackBtn,
} from './Catalog.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const carAds = useSelector(selectAds);

  useEffect(() => {
    dispatch(carsOperations.fetchBrandsList());
  }, [dispatch]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const onLoadMoreBtnClick = e => {
    dispatch(carsOperations.fetchAds({ p: 2 }));
    setIsDisabled(true);
  };

  const disabledColor = () => {
    if (isDisabled) {
      const disabledStyle = {
        color: 'rgba(18, 20, 23, 0.50)',
        cursor: 'initial',
        // display: 'none',
      };
      return disabledStyle;
    }
  };

  const onBackBtnClick = () => {
    dispatch(carsOperations.fetchAds({ p: 1, l: 12 }));
  };

  return isLoading ? (
    <Grid
      height="100"
      width="100"
      color="#3470FF"
      ariaLabel="rings-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
      wrapperClass=""
      visible={true}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  ) : (
    <>
      <div>
        <FiltersContainer>
          <FilterByBrand />
          <FilterByPrice />
          <FilterMileage />
        </FiltersContainer>
        {carAds.length === 0 ? (
          <>
            {' '}
            <EmptyList>There are no such cars</EmptyList>
            <BackBtn type="button" onClick={onBackBtnClick}>
              Back to full catalog
            </BackBtn>
          </>
        ) : (
          <>
            <AdsList>
              <CarCard handleModalOpen={handleModalOpen} />
            </AdsList>
            <MoreBtn
              style={disabledColor()}
              type="button"
              onClick={onLoadMoreBtnClick}
              disabled={isDisabled}
            >
              Load more
            </MoreBtn>
          </>
        )}
      </div>
      {isModalOpen && <Modal onModalClose={onModalClose} />}
    </>
  );
};

export default Catalog;
