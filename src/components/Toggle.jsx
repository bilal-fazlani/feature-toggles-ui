import * as React from "react";
import './Toggle.css'
import * as PropTypes from 'prop-types'
import {connect} from "react-redux";

export class Toggle extends React.Component{

    constructor(props){
        super(props);
        this.state = {on: props.on};
        this.toggle = this.toggle.bind(this);
    }

    render(){
        return <div className="toggle-button border" onClick={this.toggle}>
            <div className={this.state.on? "on" : "off"}>
                {this.props.env}
            </div>
        </div>
    }

    toggle(){
        this.setState({on: !this.state.on});
    }
}

Toggle.propTypes = {
    env: PropTypes.string.isRequired,
    featureName : PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        on : state.featureToggles.data[ownProps.featureName][ownProps.env]
    }
}

export default connect(mapStateToProps)(Toggle);