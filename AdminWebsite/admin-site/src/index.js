import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
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
=======
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
>>>>>>> 01cba834a4acfc3886888d43cfc2dfc85f9f70ad

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
