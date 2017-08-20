import React, { Component } from 'react';
import AppLayout from "./components/AppLayout";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {loadTogglesAsync} from "./actionCreators/featureToggles";


class App extends Component {

    componentDidMount(){
        this.props.loadTogglesAsync();
    }

    render() {
    return (
        <div className="App">
          <MuiThemeProvider >
            <AppLayout />
          </MuiThemeProvider>
      </div>
    );
    }
}

const mapDispatchToProps = (dispatch) => ({
    loadTogglesAsync : () => dispatch(loadTogglesAsync())
});

export default connect(()=> ({}), mapDispatchToProps)(App);

