import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './Components/About';
import Landing from './Components/Landing';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;