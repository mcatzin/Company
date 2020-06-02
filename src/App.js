import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import Home from './components/Home';
import RequestForm from './components/RequestForm';
import { Table } from './components/Table';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/requestform" component={RequestForm} />
          <Route component={Table} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
