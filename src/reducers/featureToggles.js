import {} from "../constants";
import {LOAD_TOGGLES, TOGGLES_LOADED} from "../constants";

export default function (state = {}, action) {
    switch (action.type){
        case LOAD_TOGGLES:
            return {...state, loaded: false};
        case TOGGLES_LOADED:
            return {...state, loaded: true};
        default:
            return state;
    }
}