import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.css'
import App from './App';
import './i18n';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Suspense fallback="loading.....">
    <App />
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
