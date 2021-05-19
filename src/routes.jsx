import { ROUTE_PATH } from "./config/constants";

import Home from "views/pages/Home"
import CreateHabit from "views/pages/Habits/CreateHabit";
import ViewHabit from "views/pages/Habits/ViewHabit";
import ViewSpecificHabit from "views/pages/Habits/ViewSpecificHabit";

const dashRoutes = [
  {
    path: "/home",
    name: "Home Page",
    component: Home,
    layout: ROUTE_PATH.USER
  },
  {
    path: "/habits-create",
    name: "Create Habit",
    component: CreateHabit,
    layout: ROUTE_PATH.USER
  },
  {
    path: "/habits-view/:id",
    name: "View Habit",
    component: ViewSpecificHabit,
    layout: ROUTE_PATH.USER,
  },
  {
    path: "/habits-view",
    name: "View Habit",
    component: ViewHabit,
    layout: ROUTE_PATH.USER
  },


]

export default dashRoutes