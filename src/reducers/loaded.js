import {} from "../constants";
import {LOAD_DATA, DATA_LOADED} from "../constants";

export default function (state = false, action) {
    switch (action.type){
        case LOAD_DATA:
            return false;
        case DATA_LOADED:
            return true;
        default:
            return state;
    }
}