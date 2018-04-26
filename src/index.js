import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";
import {ConnectedRouter} from 'connected-react-router';
import {MuiThemeProvider, createMuiTheme} from 'material-ui';
import AppLayout from './components/AppLayout';
import {history} from './history';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1FBCD3',
            contrastText: '#FFFFFF'
        }
    },
});

ReactDOM.render(
    <Provider store={configureStore(history)}>
        <ConnectedRouter history={history}>
            <MuiThemeProvider theme={theme} >
                <AppLayout/>
            </MuiThemeProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();