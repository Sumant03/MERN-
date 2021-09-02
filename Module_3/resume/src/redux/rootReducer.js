import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer"

import { combineReducers } from "redux"

let rootReducer=combineReducers({
    template:templateReducer,
  user:userReducer,
});


export default rootReducer;