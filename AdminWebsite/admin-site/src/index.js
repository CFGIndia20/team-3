import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import  "bootstrap/dist/css/bootstrap.min.css";
const routing = (
  <Router>
    <div>
      <Header />
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        
      </Switch>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(
  routing,
  document.getElementById('root')
);
