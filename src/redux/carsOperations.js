import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648831980e2469c038fd322d.mockapi.io/'

export const getAllCars = createAsyncThunk('/cars/allCars', async (_, thunkAPI) => {
  try {
      const { data } = await axios.get('/cars');
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getCarById = createAsyncThunk('/cars/carsById', async (id, thunkAPI) => {
  try {
      const { data } = await axios.get(`/cars/${id}`);
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});



