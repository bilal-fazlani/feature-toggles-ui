import React from 'react';
import {Dialog, FlatButton, IconButton, IconMenu, MenuItem} from 'material-ui';
import {MoreVert} from '@material-ui/icons';

export default class AppBarMenu extends React.Component {

    state = {
        aboutToolOpen: false,
        aboutDeveloperOpen: false,
        configurationsOpen: false
    };

    handleOpenAbout = () => {
        this.setState({aboutToolOpen: true});
    };

    handleOpenDeveloperAbout = () => {
        this.setState({aboutDeveloperOpen: true});
    };

    handleOpenConfig = () => {
        this.setState({configurationsOpen: true});
    };

    handleClose = () => {
        this.setState({aboutToolOpen: false, aboutDeveloperOpen: false, configurationsOpen: false});
    };

    render() {

        const modalActions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return <div>
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVert color={'white'}/></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            >
                <MenuItem primaryText="About feature-toggles-ui" onClick={this.handleOpenAbout}/>
                <MenuItem primaryText="About developer" onClick={this.handleOpenDeveloperAbout}/>
                <MenuItem primaryText="Configurations" onClick={this.handleOpenConfig}/>
            </IconMenu>

            <Dialog
                title="About feature-toggles-ui"
                actions={modalActions}
                modal={false}
                open={this.state.aboutToolOpen}
                onRequestClose={this.handleClose}
            >
                <div>
                    feature-toggles-ui is an open source ui for fetching boolean feature toggles from spring cloud
                    config server and displaying in a read-only mode.
                </div>
                <br/>
                <div>
                    Base docker image is deployed on <a
                    target={'_blank'}
                    href='https://hub.docker.com/r/bilalfazlani/feature-toggles-ui/'>docker hub</a>.
                </div>
                <br/>
                <div>
                    Code is hosted on <a target={'_blank'} href='https://github.com/bilal-fazlani/feature-toggles-ui'>github</a>.
                    Please see readme documentation for more information/instructions.
                </div>
            </Dialog>

            <Dialog
                title="About developer"
                actions={modalActions}
                modal={false}
                open={this.state.aboutDeveloperOpen}
                onRequestClose={this.handleClose}
            >
                <div>
                    Developed by <a target='_blank' href='https://in.linkedin.com/in/bilalfazlani'>Bilal Fazlani</a>
                </div>
                <br/>
                <div>
                    <a href={'mailto:bilal.m.fazlani@gmail.com'}>bilal.m.fazlani@gmail.com</a>
                </div>
            </Dialog>
        </div>

    }
}