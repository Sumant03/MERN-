import templateReducer from "./reducers/templateReducer"
import userReducer from "./reducers/userReducer";
import detailsReducer from "./reducers/detailsReducer"; 

import { combineReducers } from "redux"

let rootReducer=combineReducers({
    template:templateReducer,
  user:userReducer,
  details:detailsReducer
});


export default rootReducer;