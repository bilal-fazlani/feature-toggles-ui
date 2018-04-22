import {LOAD_DATA, DATA_LOADED} from "../constants";
import getApplications from '../services/configProvider';

export const loadData = () => ({
    type : LOAD_DATA
});

export const dataLoaded = (data) => ({
    type: DATA_LOADED,
    payload: data
});

export const loadDataAsync = () => (async (dispatch, state) => {

    dispatch(loadData());

    const data = await getApplications();

    dispatch(dataLoaded(data));
});