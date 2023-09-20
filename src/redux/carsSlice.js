import { createSlice } from '@reduxjs/toolkit';
import { addToFavorites, getAllCars } from './carsOperations';


const initialState = {
  carsList: [],
  favorites: 0,
  loading: false,
  error: null,
  reRender: false,
};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder => {
      builder
          .addCase(
            getAllCars.pending,( state) => {
              state.error = null;
              state.loading = true;
              
          })
        .addCase(
            getAllCars.fulfilled,
              (state, { payload }) => {
                  state.carsList = payload
                  state.favorites = payload.filter((item) => item.favorite === true).length 
                  state.loading = false;
              }
          )
        .addCase(
            getAllCars.rejected,
              (state, { payload }) => {
                  state.error = payload;
                  state.loading = false;
              }
          )

        .addCase(
            addToFavorites.pending, (state) => {
            state.error = null;
            state.reRender = true;
            state.loading = true;
        })
        .addCase(
          addToFavorites.fulfilled,
            (state) => {
                state.reRender = false;
                state.loading = false;
               
            }
        )
        .addCase(
          addToFavorites.rejected,
            (state, { payload }) => {
                state.error = payload;
                state.reRender = false;
                state.loading = false;
            }
        )
          
  },
});


export const carsReducer = carsSlice.reducer;
