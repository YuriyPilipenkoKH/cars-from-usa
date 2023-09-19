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
        resetFilters(state, action) {
        state.filterBrand = ""
        state.filterPrice = 0
        state.filterFrom = ""
        state.filterTo = ""
      },
}

})

export const {showFilterFrom, showFilterTo, showFilterBrand, showFilterPrice, resetFilters}  = filterSlice.actions
export const filterReducer = filterSlice.reducer