import { combineReducers } from "redux";
import counter from "./counter.tsx";
import todos from "./todos.tsx";

const rootReducer = combineReducers({
	counter,
	todos,
});

export default rootReducer;
