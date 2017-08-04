import * as React from "react";
import './Feature.css'
import Toggle from "./Toggle";
import * as PropTypes from 'prop-types'

export default class Feature extends React.Component{
    render(){
        return <div className="toggle-row">
            <div className="feature-name ">
                <span>
                    {this.props.featureName}
                </span>
            </div>
            <div className="environments">
                {Object.entries(this.props.toggles).map( t=> <Toggle key={`${this.props.featureName}-${t[0]}`} on={t[1]} env={t[0]}/>)}
            </div>
        </div>
        }
    }

Feature.propTypes = {
    featureName : PropTypes.string.isRequired,
    toggles : PropTypes.object.isRequired
};