import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";
import { carsReducer } from "./carsSlice";


export const store = configureStore({
    reducer: {
        cars: carsReducer,
        filter: filterReducer,
        modal: modalReducer,
        theme:themeReducer,
   },
  })
