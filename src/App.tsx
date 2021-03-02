import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import BlockBuster from './components/blockbuster/BlockBuster';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/blockbuster" render={BlockBuster} />
      </Switch>
    </Router>
  );
}

export default App;
