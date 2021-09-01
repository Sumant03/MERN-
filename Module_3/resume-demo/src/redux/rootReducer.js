import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer";
import detailReducer from "./reducers/detailReducers"

let rootReducer = combineReducers({
  template: templateReducer,
  user: userReducer,
  details: detailReducer,
});

export default rootReducer;