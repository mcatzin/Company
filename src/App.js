import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

import Table from './components/Table';
import Navbar from './components//Navbar';

import TaskForm from './components/Task/TaskForm';

import './App.css';

function App() {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/request" component={TaskForm} />
          <Route exact path="/table" component={Table} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
