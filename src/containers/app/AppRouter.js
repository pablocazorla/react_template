import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routeList from './routes';
import asyncComponent from './AsyncFunc';

class AppRouter extends React.Component {
  render() {
    const routes = routeList.map((r,i) => {
      return <Route key={i} exact
        path={r.path}
        component={asyncComponent(() => import('../'+r.component+'/index.js'))}
      />      
    }); 


    return <Switch>
      {routes}
    </Switch>;
  }
}
export default AppRouter;