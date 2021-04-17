import { ROUTE_PATH } from "./config/constants";

import Home from "views/pages/Home"

const dashRoutes = [
  {
    path: "/",
    name: "Home Page",
    component: Home,
    layout: ROUTE_PATH.USER
  }
]

export default dashRoutes