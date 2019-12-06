import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import './css/theme.css'
import './scss/theme.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render((
  <Router basename={'/content-api-ref-app/'}>
    <App/>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
