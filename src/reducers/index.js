import { combineReducers } from 'redux'
import layout from "./layout";
import loaded from "./loaded";
import applications from "./applications";

export default combineReducers({
    layout,
    loaded,
    applications
});