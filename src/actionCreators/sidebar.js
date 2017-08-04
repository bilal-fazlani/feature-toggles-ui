import {CLOSE_SIDEBAR, SET_SIDEBAR, TOGGLE_SIDEBAR} from "../constants";


export const toggleSidebar = () => ({
    type : TOGGLE_SIDEBAR
});

export const closeSidebar = () => ({
    type: CLOSE_SIDEBAR
});

export const setSidebar = (sidebarStatus) => ({
    type: SET_SIDEBAR,
    payload: sidebarStatus
});
