import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import {ROUTE_PATH} from "./config/constants";
import UserLayout from "./layouts/User";


const Routes = () => (
  <div>
    <Switch>
      <Route path={ ROUTE_PATH.USER } component={UserLayout} />
      <Redirect from="/" to={ ROUTE_PATH.USER }/>
    </Switch>

  </div>
)

export default Routes;
