import React from 'react';
import {AppBar} from 'material-ui';
import AppBarMenu from './AppBarMenu';

export default class RootAppbar extends React.Component {
    render() {
        return <AppBar title='Loading...'
                       iconElementRight={<AppBarMenu/>}/>
    }
}