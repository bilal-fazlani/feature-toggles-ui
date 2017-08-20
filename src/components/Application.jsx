import * as React from "react";
import Feature from './Feature';
import * as PropTypes from 'prop-types'

export default class Application extends React.Component{

    render(){
        return <div>
            <Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />
            <Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />
            <Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />
            <Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />
        </div>
    }
}

Application.propTypes = {
    applicationName: PropTypes.string.isRequired
};