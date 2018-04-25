import {Route} from 'react-router-dom';
import React from 'react';
import RootAppBar from './RootAppBar';
import MainAppBar from './MainAppBar';

export default class Header extends React.Component {
    render() {

        return <div id='header'>
            <Route exact={true} path="/"
                   render={() => <RootAppBar />}
            />
            <Route path="/:applicationName"
                   render={({match}) => <MainAppBar applicationName={match.params.applicationName}/>}
            />
        </div>
    }
}