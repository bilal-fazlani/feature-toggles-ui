import * as React from "react";
import './Feature.css'
import Toggle from "./Toggle";
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";
import {Paper} from 'material-ui';

export class Feature extends React.Component {
    render() {
        const environmentNames = Object.keys(this.props.environments);

        return <div className="toggle-row">
            <Paper zDepth={1}  style={{padding:"0.5em"}}>
                <div className="feature-name ">
                    {this.props.featureName}
                </div>
                <div className="environments">
                    {environmentNames.map(env => <Toggle key={env}
                                                         environment={env}
                                                         featureName={this.props.featureName}
                    />)}
                </div>
            </Paper>
        </div>
    }
}

Feature.propTypes = {
    featureName: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {

    const environmentValues = state.applications[state.activeApplication][ownProps.featureName];

    return {
        environments: environmentValues
    };
}

export default connect(mapStateToProps)(Feature);