import {Drawer, MenuItem} from "material-ui";
import * as React from "react";
import {connect} from "react-redux";
import {closeSidebar, setSidebar} from "../actionCreators/sidebar";
import {Link} from 'react-router-dom';

class Sidebar extends React.Component{

    constructor(props){
        super(props);

        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick(){
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
                        <Link onClick={this.onLinkClick} to={`${appName}`} className='plainLink'>
                            <MenuItem key={appName}>
                                {appName}
                            </MenuItem>
                        </Link>
                ))}
            </Drawer>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.layout.sidebar,
        applications : Object.keys(state.applications)
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeSidebar : () => dispatch(closeSidebar()),
    setSidebar : (sidebarStatus) => dispatch(setSidebar(sidebarStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);