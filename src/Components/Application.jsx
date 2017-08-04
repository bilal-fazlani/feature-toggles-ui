import Collapsible from 'react-collapsible';
import * as React from "react";
import Feature from './Feature';
import './Application.css'

export default class Application extends React.Component{

    render(){
        return <div className="collapsible-wrapper">
            <Collapsible
                easing="ease-in-out"
                transitionTime={400} trigger={
                <span className="collapsible-title">{this.props.applicationName}</span>}>
                <div className="collapsible-content">
                    <Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />
                    <Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />
                    <Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />
                    <Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />
                </div>
            </Collapsible>
        </div>
    }
}

Application.propTypes = {
    applicationName: React.PropTypes.string.isRequired
};