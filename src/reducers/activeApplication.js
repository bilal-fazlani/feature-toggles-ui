import {SWITCH_APPLICATION} from "../constants";

export default function (state = '', action) {
    switch (action.type){
        case SWITCH_APPLICATION:
            return action.payload;
        default:
            return state;
    }
}