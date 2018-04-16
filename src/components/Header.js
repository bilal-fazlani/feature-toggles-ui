import {Route, withRouter} from 'react-router-dom';
import {AppBar} from 'material-ui';
import React from 'react';
import {toggleSidebar} from '../actionCreators/sidebar';
import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        return <div id='header'>
            <Route exact={true} path="/" render={({}) => <AppBar title={this.props.dataLoaded ? 'Please select an app' : 'Loading...'}
                                                                 onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />
            <Route path="/:applicationName" render={({match}) => <AppBar title={this.props.dataLoaded ? match.params.applicationName : 'Loading...'}
                                                                         onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleToggle : () => dispatch(toggleSidebar())
});

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));