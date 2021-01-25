import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Transactions from '../pages/Transactions';

const Router = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/transactions" component={Transactions} />
        <Route component={() => <div><h1>404</h1></div>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
