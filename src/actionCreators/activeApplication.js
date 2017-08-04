import {SWITCH_APPLICATION} from "../constants";

export default function (appName) {
    return {
        type : SWITCH_APPLICATION,
        payload : appName
    }
}