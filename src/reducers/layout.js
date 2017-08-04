import {CLOSE_SIDEBAR, SET_SIDEBAR, TOGGLE_SIDEBAR} from "../constants";

export default function (state = {}, action) {
    switch (action.type){
        case TOGGLE_SIDEBAR:
            return {...state, sidebar: !state.sidebar};
        case CLOSE_SIDEBAR:
            return {...state, sidebar: false};
        case SET_SIDEBAR:
            return {...state, sidebar: action.payload};
        default:
            return state;
    }
}