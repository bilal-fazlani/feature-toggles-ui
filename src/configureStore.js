import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore() {

    const initialState = {
        layout: {
            sidebar: false
        },
        featureToggles:{
            loaded: false,
            data : {
                "hello world" : {
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
        }
    };

    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunkMiddleware))
        //window.devToolsExtension ? window.devToolsExtension() : undefined
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextReducer = require('./reducers');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}