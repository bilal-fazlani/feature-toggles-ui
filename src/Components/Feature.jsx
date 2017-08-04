import * as React from "react";
import './Feature.css'
import Toggle from "./Toggle";

export default class Environments extends React.Component{
    render(){
        return <div className="toggle-row">
            <div className="feature-name ">
                <span>
                    {this.props.featureName}
                </span>
            </div>
            <div className="environments">
                {Object.entries(this.props.toggles).map( t=> <Toggle on={t[1]} env={t[0]}/>)}
            </div>
        </div>
        }
    }

Environments.propTypes = {
    featureName : React.PropTypes.string.isRequired,
    toggles : React.PropTypes.object.isRequired
};