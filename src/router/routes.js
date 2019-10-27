import { Router, Route, Switch, useHistory } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../Home/home'
import Login from '../authentication/login'
import Signup from '../authentication/signup'
import history from './history'
import Editor from '../Editor/editor'
import Dashboard from '../Dashboard/dashboard'
const Routes = () => (
  
<Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/Editor" component={Editor} />
      <Route path="/dashboard" component={Dashboard} />

    </Switch>
  </Router>

);

export default Routes;