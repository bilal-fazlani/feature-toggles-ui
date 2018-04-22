import {Component} from 'react';
import React from 'react';
import './ErrorPage.css';

export default class ErrorPage extends Component{
    render(){
        return <div id='error-page'>
            <img alt='error' src="assets/error-screen.svg" />
        </div>
    }
}