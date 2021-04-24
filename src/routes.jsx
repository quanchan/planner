import { ROUTE_PATH } from "./config/constants";

import Home from "views/pages/Home"
import Create from "views/pages/Habits/Create";

const dashRoutes = [
  {
    path: "/home",
    name: "Home Page",
    component: Home,
    layout: ROUTE_PATH.USER
  },
  {
    path: "/habits",
    name: "Create Habit",
    component: Create,
    layout: ROUTE_PATH.USER

  }
]

export default dashRoutes