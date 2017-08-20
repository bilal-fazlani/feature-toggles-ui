import * as React from "react";
import './Feature.css'
import Toggle from "./Toggle";
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";

export class Feature extends React.Component{
    render(){
        return <div className="toggle-row">
            <div className="feature-name ">
                <span>
                    {this.props.featureName}
                </span>
            </div>
            <div className="environments">
                {this.props.environments.map(env=><Toggle env={env} featureName={this.props.featureName} />)}
            </div>
        </div>
        }
    }

Feature.propTypes = {
    featureName : PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        environments: Object.keys(state.featureToggles.data[ownProps.featureName])
    };
}

export default connect(mapStateToProps)(Feature);