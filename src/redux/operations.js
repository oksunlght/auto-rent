import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656942fcde53105b0dd6d9c8.mockapi.io';

const fetchAds = createAsyncThunk('cars/fetchAll', async (params, thunkAPI) => {
  try {
    const res = await axios.get('/cars', { params });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchBrandsList = createAsyncThunk(
  'cars/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/cars');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const carsOperations = {
  fetchAds,
  fetchBrandsList,
};

export default carsOperations;
