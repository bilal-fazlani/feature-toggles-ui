import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";
import {ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {MuiThemeProvider} from 'material-ui';
import AppLayout from './components/AppLayout';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider>
                <AppLayout/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
