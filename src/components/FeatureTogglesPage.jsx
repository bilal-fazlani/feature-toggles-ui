import * as React from "react";
import Feature from './Feature';
import {connect} from "react-redux";
import './FeatureTogglesPage.css';
import ErrorPage from './ErrorPage';

class FeatureTogglesPage extends React.Component{

    render(){
        if(this.props.invalidPage){
            return <ErrorPage />
        }
        else{
            return <div id='featureTogglesContainer'>
                {this.props.features.map(feature=><Feature key={feature} featureName={feature} applicationName={this.props.applicationName} />)}
            </div>
        }
    }
}

function mapStateToProps(state, ownProps) {
    return {
        features: state.applications[ownProps.applicationName] ? Object.keys(state.applications[ownProps.applicationName]) : [],
        invalidPage: state.applications[ownProps.applicationName] === undefined
    }
}

export default connect(mapStateToProps)(FeatureTogglesPage);