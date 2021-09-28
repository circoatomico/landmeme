// eslint-disable-next-line
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Button from '@material-ui/core/Button';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Blog from './Templates/Blog/Blog';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/about">
        
      </Route>
      <Route path="/users">
      <h1>Users</h1>
      </Route>
      <Route path="/">
        <Blog />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
