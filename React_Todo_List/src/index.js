import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import i18next from "i18next";
import tr_language from "./translations/tr/header.json"
import en_language from "./translations/en/header.json"

i18next.init({
  
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      tr: {
          header: tr_language             // 'common' is our custom namespace
      },
      en: {
          header: en_language
      },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider İ18n ={i18next}>
    <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
