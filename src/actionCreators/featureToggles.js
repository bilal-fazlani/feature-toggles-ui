import {LOAD_DATA, DATA_LOADED} from "../constants";
import switchApplication from './activeApplication';

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

    await wait(2000);

    const data = {
        web:{
            "hello web" : {
                "dev" : true,
                "qa" : false,
                "prod" : false
            }
        },
        api:{
            "hello api" : {
                "dev" : true,
                "qa" : false,
                "prod" : false
            },
            "nice feature" : {
                "dev" : true,
                "qa" : true,
                "prod" : false
            }
        },
        database:{
            "hello database" : {
                "dev" : true,
                "qa" : false,
                "prod" : false
            },
            "nice feature" : {
                "dev" : true,
                "qa" : true,
                "prod" : false
            }
        }
    };

    dispatch(dataLoaded(data));

    const firstApplicationName = Object.keys(data)[0];

    dispatch(switchApplication(firstApplicationName));
});