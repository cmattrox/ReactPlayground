import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import HeaderBar from './components/headerbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderBar />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root_index')
);
