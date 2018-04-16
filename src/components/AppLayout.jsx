import * as React from "react";
import {AppBar} from "material-ui";
import Sidebar from "./Sidebar";
import {toggleSidebar} from "../actionCreators/sidebar";
import {connect} from "react-redux";
import Loader from "./Loader";
import FeatureTogglesPage from "./FeatureTogglesPage";
import {Route, Switch, withRouter} from 'react-router-dom';
import {loadDataAsync} from '../actionCreators/featureToggles';
import EmptyScreen from './EmptyScreen';

class AppLayout extends React.Component{

    componentDidMount() {
        this.props.loadDataAsync();
    }

    render(){
        return <div id='app-layout'>

            <div id='header'>
                <Route exact={true} path="/" render={({}) => <AppBar title={this.props.dataLoaded ? 'Please select an app' : 'Loading...'}
                                                                          onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />

                <Route path="/:applicationName" render={({match}) => <AppBar title={this.props.dataLoaded ? match.params.applicationName : 'Loading...'}
                                                                             onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />
            </div>

            {
                this.props.dataLoaded ?
                    <div id='main'>

                        <Route exact={true} path='/' render={({}) => <Sidebar />} />
                        <Route path='/:applicationName' render={({match}) => <Sidebar selectedApplication={match.params.applicationName} />} />

                        <Switch>
                            <Route path='/:applicationName'
                                   render={({match}) => <FeatureTogglesPage applicationName={match.params.applicationName}/>}
                            />

                            <Route path='/' render={() => <EmptyScreen />} />
                        </Switch>
                    </div>
                 :
                <Loader />
            }
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleToggle : () => dispatch(toggleSidebar()),
    loadDataAsync: () => dispatch(loadDataAsync())
});

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));