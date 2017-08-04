import * as React from "react";
import {AppBar} from "material-ui";
import Sidebar from "./Sidebar";
import {toggleSidebar} from "../../actionCreators/sidebar";
import {connect} from "react-redux";
import Loader from "./Loader";
import Application from "../Application";

class AppLayout extends React.Component{

    render(){
        return <div>

            <AppBar title={this.props.togglesLoaded ? this.props.applicationName : 'Loading...'}
                    onLeftIconButtonTouchTap = {this.props.togglesLoaded ? this.props.handleToggle: ()=>{}} />

            {
                this.props.togglesLoaded ?
                    <div>
                        <Sidebar />
                        <Application applicationName={this.props.applicationName}/>
                    </div>
                 :
                <Loader />
            }

            {/*<SwipeableViews*/}
                {/*index={this.state.slideIndex}*/}
                {/*onChangeIndex={this.handleChange}*/}
            {/*>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                    {/*<Feature featureName="new feature 2 " toggles={{dev: true, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 3" toggles={{dev: true, qa: true, prod: true}} />*/}
                {/*</div>*/}
                {/*<div className="collapsible-content">*/}
                    {/*<Feature featureName="new feature 0" toggles={{dev: false, qa: true, prod: false}} />*/}
                    {/*<Feature featureName="new feature 1" toggles={{dev: true, qa: false, prod: false}} />*/}
                {/*</div>*/}
            {/*</SwipeableViews>*/}
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleToggle : () => dispatch(toggleSidebar())
});

const mapStateToProps = (state) => ({
    togglesLoaded: state.featureToggles.loaded,
    applicationName : state.activeApplication
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);