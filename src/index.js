import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/MainPage/MainPage';
import i18n from "./assets/translations/i18n";
import { I18nextProvider } from "react-i18next";

ReactDOM.render(  
  <I18nextProvider i18n={i18n}>
    <MainPage/>
  </I18nextProvider>,
  document.getElementById('root')
);