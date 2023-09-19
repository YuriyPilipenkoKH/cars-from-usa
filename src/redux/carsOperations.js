import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648831980e2469c038fd322d.mockapi.io/'

export const getAllCars = createAsyncThunk('/cars/getAll', async (_, thunkAPI) => {
  try {
      const { data } = await axios.get('/cars');
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const getCarById = createAsyncThunk('/cars/getById', async (id, thunkAPI) => {
  try {
      const { data } = await axios.get(`/cars/${id}`);
      console.log(data)
      return data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const addToFavorites = createAsyncThunk('/cars/add', async (updateObject, thunkAPI) => {
  try {
    const { id, updatedCar } = updateObject;
    console.log(id)
    const response = await axios.put(
        `/cars/${id}`, updatedCar
    )
    return response.data;
  } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
  }
});





