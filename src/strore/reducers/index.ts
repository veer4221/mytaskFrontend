import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
export type stateType = ReturnType<typeof rootReducer>;
