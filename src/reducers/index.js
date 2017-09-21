import { combineReducers } from 'redux'
import activeApplication from './activeApplication'
import layout from "./layout";
import loaded from "./loaded";
import applications from "./applications";

export default combineReducers({
    activeApplication,
    layout,
    loaded,
    applications
});