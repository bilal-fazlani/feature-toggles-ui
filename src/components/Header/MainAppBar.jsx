import React from 'react';
import {AppBar} from 'material-ui';
import {toggleSidebar} from '../../actionCreators/sidebar';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import AppBarMenu from './AppBarMenu';

class MainAppBar extends React.Component {
    render() {
        return <AppBar
            title={this.props.dataLoaded ? this.props.applicationName : 'Loading...'}
            onLeftIconButtonClick={this.props.handleToggle}
            iconElementRight={<AppBarMenu/>}/>;
    }
}

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded
});

const mapDispatchToProps = (dispatch) => ({
    handleToggle: () => dispatch(toggleSidebar())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainAppBar));