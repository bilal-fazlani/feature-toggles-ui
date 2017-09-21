import {Drawer, MenuItem} from "material-ui";
import * as React from "react";
import {connect} from "react-redux";
import {closeSidebar, setSidebar} from "../actionCreators/sidebar";
import switchApplication from "../actionCreators/activeApplication";

class Sidebar extends React.Component{

    constructor(props){
        super(props);

        this.onMenuClick = this.onMenuClick.bind(this);
    }

    onMenuClick(appName){
        this.props.switchApplication(appName);
        this.props.closeSidebar();
    }

    render(){
            return <div>
            <Drawer
                docked={false}
                width={300}
                open={this.props.open}
                onRequestChange={(open) => this.props.setSidebar(open)} >
                {
                    this.props.applications.map((appName) => (
                    <MenuItem onTouchTap={()=>this.onMenuClick(appName)} key={appName}>{appName}</MenuItem>
                ))}
            </Drawer>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.info('state', state);
    return {
        open: state.layout.sidebar,
        applications : Object.keys(state.applications)
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeSidebar : () => dispatch(closeSidebar()),
    setSidebar : (sidebarStatus) => dispatch(setSidebar(sidebarStatus)),
    switchApplication : (appName) => dispatch(switchApplication(appName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);