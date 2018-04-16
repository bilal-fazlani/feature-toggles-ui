import * as React from "react";
import {AppBar} from "material-ui";
import Sidebar from "./Sidebar";
import {toggleSidebar} from "../actionCreators/sidebar";
import {connect} from "react-redux";
import Loader from "./Loader";
import FeatureTogglesPage from "./FeatureTogglesPage";
import {Route, Switch, withRouter} from 'react-router-dom';
import {loadDataAsync} from '../actionCreators/featureToggles';

class AppLayout extends React.Component{

    componentDidMount() {
        this.props.loadDataAsync();
    }

    render(){
        return <div>

            <Route exact={true} path="/" render={({match}) => <AppBar title={this.props.dataLoaded ? 'Please select an app' : 'Loading...'}
                                                         onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />

            <Route path="/:applicationName" render={({match}) => <AppBar title={this.props.dataLoaded ? match.params.applicationName : 'Loading...'}
                                                                      onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />} />

            {
                this.props.dataLoaded ?
                    <div>
                        <Sidebar />
                        <Switch>
                            <Route path='/:applicationName'
                                   render={({match}) => <FeatureTogglesPage applicationName={match.params.applicationName}/>}
                            />

                            <Route path='/' render={() => <h1>APP SELECTOR</h1>} />
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