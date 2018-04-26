import {Route} from 'react-router-dom';
import React from 'react';
import ApplicationBar from './ApplicationBar';

export default class Header extends React.Component {
    render() {

        return <div id='header'>
            <Route exact={true} path="/"
                   render={() => <ApplicationBar />}
            />
            <Route path="/:applicationName"
                   render={({match}) => <ApplicationBar applicationName={match.params.applicationName}/>}
            />
        </div>
    }
}