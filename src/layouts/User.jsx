import React from "react";
import {Route, Switch} from "react-router-dom";
import {ROUTE_PATH} from "../config/constants";
import userRoutes from "../routes"
const getRoutes = routes => {
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return getRoutes(prop.views);
    }
    if (prop.layout === ROUTE_PATH.USER) {
      return (
        <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      );
    } else {
      return null;
    }
  });
};

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Switch>
        {getRoutes(userRoutes)}
      </Switch>
    </div>
  )
}

export default UserLayout