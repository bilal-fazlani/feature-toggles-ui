import React from 'react';
import {
    Dialog, Button, IconButton, MenuItem, Menu, DialogTitle, DialogContent, DialogActions,
    Divider, withMobileDialog
} from 'material-ui';
import {MoreVert} from '@material-ui/icons';
import configService from '../../services/configService';
import JSONPretty from 'react-json-pretty';

class AppBarRightMenu extends React.Component {

    state = {
        aboutToolOpen: false,
        configurationsOpen: false,
        anchorEl: null
    };

    handleOpenAbout = () => {
        this.setState({aboutToolOpen: true, anchorEl: null});
    };

    handleOpenConfig = () => {
        this.setState({configurationsOpen: true, anchorEl: null});
    };

    handleCloseDialogs = () => {
        this.setState({aboutToolOpen: false, configurationsOpen: false});
    };

    handleMenuOpen = (event) => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {fullScreen} = this.props;

        return <div>
            <IconButton aria-owns={'menu-appbar'}
                        aria-haspopup="true"
                        onClick={this.handleMenuOpen}
                        color="inherit">
                <MoreVert color={'inherit'}/>
            </IconButton>

            <Menu id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleMenuClose}>
                <MenuItem onClick={this.handleOpenAbout}>About feature-toggles-ui</MenuItem>
                <MenuItem onClick={this.handleOpenConfig}>Configuration</MenuItem>
            </Menu>

            <Dialog
                modal={false}
                open={this.state.aboutToolOpen}
                autoScrollBodyContent={true}
                fullScreen={fullScreen}
                onClose={this.handleCloseDialogs}
                aria-labelledby="about-dialog-title"
            >
                <DialogTitle id="about-dialog-title">{"About feature-toggles-ui"}</DialogTitle>
                <DialogContent>
                    <div>
                        feature-toggles-ui is an open source ui for fetching boolean feature toggles from spring cloud
                        config server and displaying in a read-only mode.
                    </div>
                    <br/>
                    <div>
                        Base docker image is deployed on <a
                        rel={'help'}
                        target={'_blank'}
                        href='https://hub.docker.com/r/bilalfazlani/feature-toggles-ui/'>docker hub</a>.
                    </div>
                    <br/>
                    <div>
                        Source code is available on <a target={'_blank'} rel={'help'}
                                                       href='https://github.com/bilal-fazlani/feature-toggles-ui'>github</a>.
                        Please see readme documentation for more information/instructions.
                    </div>
                    <br/>
                    <Divider/>
                    <br/>
                    <div>
                        Developed by <a target='_blank' rel={'author'} href='https://in.linkedin.com/in/bilalfazlani'>Bilal
                        Fazlani</a> | <a href={'mailto:bilal.m.fazlani@gmail.com'}>bilal.m.fazlani@gmail.com</a>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCloseDialogs} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                modal={false}
                open={this.state.configurationsOpen}
                autoScrollBodyContent={true}
                fullScreen={fullScreen}
                onClose={this.handleCloseDialogs}
                aria-labelledby="config-dialog-title"
            >
                <DialogTitle id="config-dialog-title">{"Configuration"}</DialogTitle>
                <DialogContent>
                    <JSONPretty id="configs" json={configService.configs}></JSONPretty>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCloseDialogs} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    }
}

export default withMobileDialog()(AppBarRightMenu);