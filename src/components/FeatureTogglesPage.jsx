import * as React from "react";
import Feature from './Feature';
import {connect} from "react-redux";

class FeatureTogglesPage extends React.Component{

    render(){
        return <div>
            {this.props.features.map(feature=><Feature key={feature} featureName={feature} />)}
        </div>
    }
}

function mapStateToProps(state) {
    return {
        features: state.activeApplication ? Object.keys(state.applications[state.activeApplication]) : []
    }
}

export default connect(mapStateToProps)(FeatureTogglesPage);