import { combineReducers } from "redux";
import Authenticated from "./Authenticated";
import Login from "./Login";
import Register from "./Register";

const rootReducer = combineReducers({
  Authenticated,
  Login,
  Register
});

export default rootReducer;
