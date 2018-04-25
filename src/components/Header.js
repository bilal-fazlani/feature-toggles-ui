import {Route, withRouter} from 'react-router-dom';
import {AppBar, Dialog, FlatButton} from 'material-ui';
import React from 'react';
import {toggleSidebar} from '../actionCreators/sidebar';
import {connect} from 'react-redux';

class Header extends React.Component {

    state = {
        aboutToolOpen: false
    };

    handleOpen = () => {
        this.setState({aboutToolOpen: true});
    };

    handleClose = () => {
        this.setState({aboutToolOpen: false});
    };

    render() {

        const modalActions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return <div id='header'>
            <Route exact={true} path="/"
                   render={() => <AppBar title={this.props.dataLoaded ? 'Please select an app' : 'Loading...'}
                                         onLeftIconButtonClick={this.props.dataLoaded ? this.props.handleToggle : () => {
                                         }}
                                         iconElementRight={<FlatButton label="About" onClick={this.handleOpen}/>}/>}
            />
            <Route path="/:applicationName" render={({match}) => <AppBar
                title={this.props.dataLoaded ? match.params.applicationName : 'Loading...'}
                onLeftIconButtonClick={this.props.dataLoaded ? this.props.handleToggle : () => {
                }}
                iconElementRight={<FlatButton label="About" onClick={this.handleOpen}/>}/>}
            />
            <Dialog
                title="About feature-toggles-ui"
                actions={modalActions}
                modal={false}
                open={this.state.aboutToolOpen}
                onRequestClose={this.handleClose}
            >
                <div>
                    feature-toggles-ui is an open source ui for fetching boolean feature toggles from spring cloud
                    config server and displaying in a read-only mode.
                </div>
                <br/>
                <div>
                    Base docker image is deployed on <a
                    href='https://hub.docker.com/r/bilalfazlani/feature-toggles-ui/'>docker hub</a>.
                </div>
                <br/>
                <div>
                    Code is hosted on <a href='https://github.com/bilal-fazlani/feature-toggles-ui'>github</a>.
                    Please see readme documentation for more information/instructions.
                </div>
            </Dialog>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleToggle: () => dispatch(toggleSidebar())
});

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));