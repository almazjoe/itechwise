import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import i18n from './i18n';
import App from './App.jsx';
import './lib/i18n.js';
import './index.css';
import './i18n.js';

document.documentElement.setAttribute('lang', i18n.language || 'en');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
