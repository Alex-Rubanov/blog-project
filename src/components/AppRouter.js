import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from './router/routes';

import React from 'react'

export default function AppRouter() {
  return (
    <Switch>
      {routes.map(route => 
        <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
      )}
      <Redirect to="/404"/>
    </Switch>
  )
}
