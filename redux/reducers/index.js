import { combineReducers } from "redux";

// Reducers
import todo from "./todo-reducer";
import user from "./user-reducer";

export default combineReducers({
    todo,
    user,
});
