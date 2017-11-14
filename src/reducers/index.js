import { combineReducers } from "redux";

import sidebar from "./sidebar-reducer";
import data from "./data";

export default combineReducers({
  sidebar,
  data
})
