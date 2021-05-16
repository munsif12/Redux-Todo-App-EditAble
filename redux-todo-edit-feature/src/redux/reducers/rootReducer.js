import { combineReducers } from "redux";
import { add_del_reducers } from "./add-del-reducer";

const rootReducer = combineReducers({ add_del_reducers });
export { rootReducer };
