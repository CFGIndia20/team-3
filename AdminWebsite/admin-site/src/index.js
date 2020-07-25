import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Add_Question from './components/add_question.js';

import Header from '../src/components/header';
import Footer from '../src/components/footer';

const routing = (
  <Router>
    <div>
     <Header/>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
         
      </Switch>
      <Footer/>
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
