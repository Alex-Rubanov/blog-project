import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './router/routes';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { SpinnerCircular } from 'spinners-react';

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return <SpinnerCircular/>
  }

  return (
          isAuth
          ?
          <Switch>
            {privateRoutes.map(route => 
              <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
            )}
            <Redirect to="/404"/>
          </Switch>
          :
          <Switch>
            {publicRoutes.map(route => 
              <Route path={route.path} exact={route.exact} component={route.component} key={route.path} />
            )}
            <Redirect to="/login"/>
          </Switch>
        )
}
