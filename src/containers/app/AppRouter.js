import React from 'react';
import { Switch, Route } from 'react-router-dom';
import sitemap from './sitemap';
import asyncComponent from './AsyncFunc';

class AppRouter extends React.Component {
  render() {
    let sitemapList = [];

    for(var a in sitemap) {
      sitemapList.push(sitemap[a]);
    }

    const routesEN = sitemapList.map((r,i) => {
      return <Route key={i} exact
        path={r.path}
        component={asyncComponent(() => import('../'+r.component+'/index.js'))}
      />      
    });

    const routesES = sitemapList.map((r,i) => {
      if(r.path_es){
          return <Route key={i} exact
          path={r.path_es}
          component={asyncComponent(() => import('../'+r.component+'/index.js'))}
        />
      }else{
        return null;
      }
    });

    const routes = routesEN.concat(routesES);

    return <Switch>
      {routes}
    </Switch>;
  }
}
export default AppRouter;