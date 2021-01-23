import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route component={() => <div>
        <h1>404</h1>
      </div>}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
