import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Menu from './components/Menu';
import {BrowserRouter}  from 'react-router-dom';
import {Switch, Route, Link} from 'react-router-dom';
import Main from './components/Main';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
