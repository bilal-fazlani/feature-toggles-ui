import {DATA_LOADED} from "../constants";

export default function (state = {}, action) {
    switch (action.type){
        case DATA_LOADED:
            return action.payload;
        default:
            return state;
    }
}