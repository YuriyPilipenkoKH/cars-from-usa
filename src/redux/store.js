import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { filterReducer } from "./filterSlice";
import { modalReducer } from "./modalSlice";


export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        filter: filterReducer,
        modal: modalReducer,
        theme:themeReducer,
   },
  })
