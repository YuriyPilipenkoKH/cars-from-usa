import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { themeReducer } from "./themeSlice";
import { langReducer } from "./langSlice";


export const store = configureStore({

    reducer: {
        // contacts: contactsReducer,
        theme:themeReducer,
        lang:langReducer,
   },
   middleware: getDefaultMiddleware =>
   getDefaultMiddleware({
     serializableCheck: {
       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
     },
   }),
  })

  export const persistor = persistStore(store);