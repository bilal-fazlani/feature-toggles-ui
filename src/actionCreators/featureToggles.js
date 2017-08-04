import {LOAD_TOGGLES, TOGGLES_LOADED} from "../constants";

export const loadToggles = () => ({
    type : LOAD_TOGGLES
});

export const togglesLoaded = () => ({
    type: TOGGLES_LOADED
});

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loadTogglesAsync = () => (async (dispatch) => {

    dispatch(loadToggles());

    await wait(2000);

    dispatch(togglesLoaded());
});