import React, {useEffect, useState} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE_PATH} from "config/constants";
import userRoutes from "../routes"
import LoadingScreen from "components/Loading/Loading";
import DarkModeSwitch from "components/DarkModeSwitch/DarkModeSwitch";

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
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })
  return (
    <>
      <div className="user-layout">

        {loading ?
          <LoadingScreen/>
          :
          <>
            <DarkModeSwitch/>
            <Switch>
              {getRoutes(userRoutes)}
              <Redirect from="/u" to="/u/home"/>
            </Switch>
          </>}
      </div>
    </>
  )
}

export default UserLayout