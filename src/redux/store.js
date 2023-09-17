import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeSlice";
import { langReducer } from "./langSlice";


export const store = configureStore({
    reducer: {
        // contacts: contactsReducer,
        theme:themeReducer,
        lang:langReducer,
   },
  })
