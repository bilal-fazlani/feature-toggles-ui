import * as React from "react";
import './Toggle.css'
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";

export class Toggle extends React.Component{

    render(){
        return <div className="toggle-button border">
            <div className={this.props.on? "on" : "off"}>
                {this.props.environment}
            </div>
        </div>
    }
}

Toggle.propTypes = {
    featureName: PropTypes.string.isRequired,
    environment: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        on : state.applications[state.activeApplication][ownProps.featureName][ownProps.environment]
    }
}

export default connect(mapStateToProps)(Toggle);