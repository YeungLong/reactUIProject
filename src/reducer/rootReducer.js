import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import loginReducer from "./loginReducer";
export default combineReducers({
    //routerReducer
    loginReducer
})