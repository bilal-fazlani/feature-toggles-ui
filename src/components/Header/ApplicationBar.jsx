import React from 'react';
import {AppBar, IconButton, Toolbar, Typography, withStyles} from 'material-ui';
import {toggleSidebar} from '../../actionCreators/sidebar';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import AppBarRightMenu from './AppBarRightMenu';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class ApplicationBar extends React.Component {

    constructor(props){
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => {
        if(this.props.dataLoaded) this.props.handleToggle();
    };

    render() {
        const { classes } = this.props;
        return <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={this.handleToggle} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.flex} variant="title" color="inherit">
                        {this.props.dataLoaded ? this.props.applicationName : 'Loading...'}
                    </Typography>
                    <AppBarRightMenu />
                </Toolbar>
            </AppBar>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    dataLoaded: state.loaded
});

const mapDispatchToProps = (dispatch) => ({
    handleToggle: () => dispatch(toggleSidebar())
});

export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ApplicationBar)));