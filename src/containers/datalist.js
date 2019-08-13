import React, { Component } from "react";
import TableHead from './tablehead';
import TableBody from './tbody';
import { getData } from '../actions'
import { connect } from "react-redux";

class DataList extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <div className={"container d-flex justify-content-center"}>
        <div className="App table-responsive">
          <table className={"table table-bordered"}>
            <TableHead />
            <TableBody />
          </table>

        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { getData })(DataList);
