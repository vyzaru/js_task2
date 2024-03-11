import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyStore } from './store/Context';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const customStoreValue = {
  number: 5,
  name: 'Ivan', 
  email: '1@mail.ru'
}
root.render(
  <MyStore.Provider value={customStoreValue}>
    <App />
  </MyStore.Provider>
);

