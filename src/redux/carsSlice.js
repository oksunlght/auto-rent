import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsOperations from './operations';

export const carsSlice = createSlice({
  name: 'cars',

  initialState: {
    ads: [],
    favorite: [],
    isLoading: false,
    error: null,
    selectedCar: [],
    carBrands: [],
  },

  reducers: {
    onCarSelect(state, action) {
      state.selectedCar = action.payload;
    },

    addFavorite(state, action) {
      state.favorite.push(...action.payload);
    },

    removeFavorite(state, action) {
      const index = state.favorite.findIndex(({ id }) => id === action.payload);
      state.favorite.splice(index, 1);
    },
    filterCars(state, action) {
      state.ads = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(carsOperations.fetchAds.pending, state => {
        state.isLoading = true;
      })
      .addCase(carsOperations.fetchAds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ads = action.payload;
      })
      .addCase(carsOperations.fetchAds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(carsOperations.fetchBrandsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carBrands = action.payload;
      })
      .addCase(carsOperations.fetchBrandsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const persistConfig = {
  key: 'cars',
  storage,
  whitelist: ['favorite'],
};

export const carsReducer = persistReducer(persistConfig, carsSlice.reducer);
export const { onCarSelect, addFavorite, removeFavorite, filterCars } =
  carsSlice.actions;
