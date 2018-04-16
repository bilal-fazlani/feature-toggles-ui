import * as React from "react";
import {CircularProgress} from "material-ui";

export default class Loader extends React.Component{
    render(){
        return  <div style={{
            position: 'relative'
        }}>
            <CircularProgress size={100}
                              thickness={10}
                              style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
            />
        </div>;
    }
}