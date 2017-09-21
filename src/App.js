import React, { Component } from 'react';
import AppLayout from "./components/AppLayout";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {connect} from "react-redux";
import {loadDataAsync} from "./actionCreators/featureToggles";


class App extends Component {

    componentDidMount(){
        this.props.loadDataAsync();
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
    loadDataAsync : () => dispatch(loadDataAsync())
});

export default connect(()=> ({}), mapDispatchToProps)(App);

