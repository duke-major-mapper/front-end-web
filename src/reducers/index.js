import { combineReducers } from "redux";

import sidebar from "./sidebar-reducer";
import classes from "./classes-reducer";

export default combineReducers({
  sidebar,
  classes
})
