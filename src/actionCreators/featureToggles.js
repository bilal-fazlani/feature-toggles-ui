import {LOAD_DATA, DATA_LOADED} from "../constants";
import switchApplication from './activeApplication';
import getApplications from '../services/configProvider';

export const loadData = () => ({
    type : LOAD_DATA
});

export const dataLoaded = (data) => ({
    type: DATA_LOADED,
    payload: data
});

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

export const loadDataAsync = () => (async (dispatch, state) => {

    dispatch(loadData());

    const data = await getApplications();

    dispatch(dataLoaded(data));

    const firstApplicationName = Object.keys(data)[0];

    dispatch(switchApplication(firstApplicationName));
});