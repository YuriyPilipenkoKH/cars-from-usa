import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { langReducer } from "./langSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        filter: filterReducer,
        theme:themeReducer,
        lang:langReducer,
   },
  })
