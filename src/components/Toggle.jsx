import * as React from "react";
import './Toggle.css'
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";
import {Error} from '@material-ui/icons';

export class Toggle extends React.Component{

    render(){
        return <div className="toggle-button">
            <div className={this.props.on? "on" : "off"}>
                <span>{this.props.environment}</span>
                {this.props.on === undefined ? <Error className='missingIcon' />
                     : null}
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