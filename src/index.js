import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter basename = "/cars-from-usa">
         <App/>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
