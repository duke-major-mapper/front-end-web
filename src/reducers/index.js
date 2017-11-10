import { combineReducers } from "redux";

import sidebar from "./sidebar-reducer";
import classes from "./classes-reducer";
import data from "./data";

export default combineReducers({
  sidebar,
  classes,
  data
})
