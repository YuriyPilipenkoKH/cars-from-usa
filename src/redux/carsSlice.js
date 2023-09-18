import { createSlice } from '@reduxjs/toolkit';
import { getAllCars, getCarById } from './carsOperations';


const initialState = {
  listCars: [],
  item: {},
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
          })
        .addCase(
            getAllCars.fulfilled,
              (state, { payload }) => {
                // console.log(payload);
                  state.listCars = payload
              }
          )
        .addCase(
            getAllCars.rejected,
              (state, { payload }) => {
                  state.error = payload;
              }
          )

        .addCase(
            getCarById.pending, (state) => {
            state.error = null;
        })
        .addCase(
          getCarById.fulfilled,
            (state, { payload }) => {
                state.listCars = payload
            }
        )
        .addCase(
          getCarById.rejected,
            (state, { payload }) => {
                state.error = payload;
            }
        )
          
  },
});


export const carsReducer = carsSlice.reducer;