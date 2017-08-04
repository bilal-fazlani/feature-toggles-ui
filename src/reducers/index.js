import { combineReducers } from 'redux'
import activeApplication from './activeApplication'
import layout from "./layout";
import featureToggles from "./featureToggles";

export default combineReducers({
    activeApplication,
    layout,
    featureToggles
});