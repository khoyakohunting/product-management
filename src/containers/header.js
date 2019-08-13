import React, { Component } from 'react';
import { connect } from 'react-redux';

class header extends Component{
    render(){
        return(
            <div className={"container d-flex justify-content-center"}>
                <div className="App">
                    <h1>Test App for CRUD</h1>
                    <p>This app is made with react redux by creating fake backend api (json server)</p>
                    <small>Created by Prakash Gharti</small>
                </div>
            </div>
        );
    }
}
export default header;