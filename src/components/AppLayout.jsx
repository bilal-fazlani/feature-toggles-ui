import * as React from "react";
import {AppBar} from "material-ui";
import Sidebar from "./Sidebar";
import {toggleSidebar} from "../actionCreators/sidebar";
import {connect} from "react-redux";
import Loader from "./Loader";
import FeatureTogglesPage from "./FeatureTogglesPage";

class AppLayout extends React.Component{

    render(){
        return <div>

            <AppBar title={this.props.dataLoaded ? this.props.applicationName : 'Loading...'}
                    onLeftIconButtonClick = {this.props.dataLoaded ? this.props.handleToggle: ()=>{}} />

            {
                this.props.dataLoaded ?
                    <div>
                        <Sidebar />
                        <FeatureTogglesPage applicationName={this.props.applicationName}/>
                    </div>
                 :
                <Loader />
            }
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleToggle : () => dispatch(toggleSidebar())
});

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded,
    applicationName : state.activeApplication
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);