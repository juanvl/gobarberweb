import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from 'pages/Dashboard';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Profile from 'pages/Profile';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
