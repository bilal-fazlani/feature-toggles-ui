import {Drawer, ListItemText, MenuItem, MenuList, withStyles} from "material-ui";
import * as React from "react";
import {connect} from "react-redux";
import {closeSidebar, setSidebar} from "../actionCreators/sidebar";
import {Link} from 'react-router-dom';
import './Sidebar.css';
import classNames from 'classnames';

const styles = theme => ({
    selectedItem: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.main,
        '&:hover':{
            backgroundColor: theme.palette.primary.main,
        }
    }
});

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.onLinkClick = this.onLinkClick.bind(this);
    }

    onLinkClick() {
        this.props.closeSidebar();
    }

    render() {
        const {classes} = this.props;

        return <Drawer docked={false}
                       width={300}
                       open={this.props.open}
                       onClose={() => this.props.setSidebar(false)}>
            <div id='sidebar'>
                <div id='toggle-image-wrapper'>
                    <img alt='design' id='feature-toggle-image' src="assets/sidebar-design.jpg"></img>
                </div>
                <MenuList>
                    {this.props.applications.map((appName) => (
                        <Link onClick={this.onLinkClick} to={`${appName}`}
                              className={"plainLink"}
                              key={appName}>
                            <MenuItem className={classNames(classes.menuItem, {
                                [classes.selectedItem] : this.props.selectedApplication === appName
                            })}>
                                {appName}
                            </MenuItem>
                        </Link>
                    ))
                    }
                </MenuList>
            </div>
        </Drawer>
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.layout.sidebar,
        applications: Object.keys(state.applications)
    };
};

const mapDispatchToProps = (dispatch) => ({
    closeSidebar: () => dispatch(closeSidebar()),
    setSidebar: (sidebarStatus) => dispatch(setSidebar(sidebarStatus)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sidebar));