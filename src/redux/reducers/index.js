import { combineReducers } from "redux";
import { splashState } from "./SplashReducer";

const rootReducer = combineReducers({
    splashState,
});

export default rootReducer;