import { createSlice } from "@reduxjs/toolkit";



export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     
        filterBrand: '',
        filterPrice: 0,
        filterFrom: '',
        filterTo: '',
    },
    reducers: {
        showFilterBrand(state, action) {
        state.filterBrand = action.payload
      },
        showFilterPrice(state, action) {
        state.filterPrice = action.payload
      },
        showFilterFrom(state, action) {
        state.filterFrom = action.payload
      },
        showFilterTo(state, action) {
        state.filterTo = action.payload
      },
}

})

export const {showFilterFrom, showFilterTo, showFilterBrand, showFilterPrice}  = filterSlice.actions
export const filterReducer = filterSlice.reducer