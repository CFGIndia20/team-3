import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Patients from "./components/patients";
import Donors from "./components/donors";
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
        <Route exact path="/patients-list" component={Patients} />
        <Route exact path="/donors-list" component={Donors} />
      </Switch>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(
  routing,
  document.getElementById('root')
);
