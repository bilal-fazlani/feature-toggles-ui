import {Component} from 'react';
import React from 'react';
import './EmptyScreen.css';

export default class EmptyScreen extends Component {
    render(){
        return <div id="empty-screen">
            <img id='config-logo' src="assets/config-logo.svg"></img>
        </div>;
    }
}