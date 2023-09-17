import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App/App';
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
// import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename = "/cars-from-usa">
         <App/>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();