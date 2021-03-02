import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BlockBuster from './components/blockbuster/BlockBuster';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/blockbuster" render={BlockBuster} />
        <Route path="/" render={Home} />
      </Switch>
    </Router>
  );
}

export default App;
