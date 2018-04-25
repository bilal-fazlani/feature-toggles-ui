import * as React from "react";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import Loader from "./Loader";
import FeatureTogglesPage from "./FeatureTogglesPage";
import {Route, Switch, withRouter} from 'react-router-dom';
import {loadDataAsync} from '../actionCreators/featureToggles';
import Header from './Header/Header';

class AppLayout extends React.Component{

    componentDidMount() {
        this.props.loadDataAsync();
    }

    render(){
        return <div id='app-layout'>

            <Header />

            {
                this.props.dataLoaded ?
                    <div id='main'>
                        <Route exact={true} path='/:applicationName' render={({match}) => <Sidebar selectedApplication={match.params.applicationName} />} />

                        <Switch>
                            <Route path='/:applicationName'
                                   render={({match}) => <FeatureTogglesPage applicationName={match.params.applicationName}/>}
                            />

                            <Route path='/' render={() => <FeatureTogglesPage />} />
                        </Switch>
                    </div>
                 :
                <Loader />
            }
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadDataAsync: () => dispatch(loadDataAsync())
});

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppLayout));