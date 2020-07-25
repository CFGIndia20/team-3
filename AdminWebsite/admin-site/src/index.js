import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import  "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Patients from "./components/patients";
import Donors from "./components/donors";
import Login from './components/Login';
import Add_Question from './components/add_question.js';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import FeedbackVisualization from '../src/components/FeedbackVisualization.js';

const routing = (
  <Router>

    <div>
      <Header />
      <hr/>
  
      <Switch>

        <Route exact path="/" component={Login} /> 
        <Route exact path="/app" component={App} />
        <Route exact path="/patients-list" component={Patients} />
        <Route exact path="/donors-list" component={Donors} />
        <Route exact path="/questionare" component={Add_Question} />
        <Route exact path="/feedback" component={FeedbackVisualization} />


      </Switch>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(
  routing,
  document.getElementById('root')
);
