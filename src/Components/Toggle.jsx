import * as React from "react";
import './Toggle.css'

export default class Toggle extends React.Component{

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
  on: React.PropTypes.bool.isRequired,
  env: React.PropTypes.string.isRequired
};