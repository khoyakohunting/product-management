import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteData, editProduct } from '../actions/index'
import { DATA_EDIT } from '../constants/action-type';
import { getProducts, getProductsPending, getProductsError } from '../reducers'

const mapStateToProps = state => {
  return {
    products: state.products,
    isLoading: state.isLoading,
    error: getProductsError(state)
  };

};

const mapDispatchtoProps = dispatch => {
  return {
    deleteData: id => dispatch(deleteData(id)),
    editProduct: id => dispatch(editProduct(id))
  }
}


class connectedTables extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.isDataLoaded = this.isDataLoaded.bind(this);
  }
  isDataLoaded() {
    return !this.props.isLoading
  }
  handleDelete(event) {
    //console.log(event.target.id);
    const id = event.target.id;
    this.props.deleteData({ id });
  }
  handleEdit(event) {
    //console.log(event.target.id)
    const id = event.target.id;
    this.setState({ isEditing: true });
    this.props.editProduct({ id });
  }
  createPlaceholder = () =>{

    let phTable = [];
    for(let i=0; i<=3; i++){
      let cells = [];
      for(let j=0; j<=6; j++){
        cells.push(
          <td key={j}>
              <div className="ph-item">
                <div className="ph-col-12">
                  <div className="ph-row">
                    <div className="ph-col-12 big"></div>
                  </div>
                </div>
              </div>
            </td>
        );
      }
      phTable.push(<tr key={i}>{cells}</tr>);
    }
    return phTable;
  }


  render() {
    const products = this.props.products;
    console.log("rendering", products)
    //console.log("rendering",this.isDataLoaded())
    

    if (!this.isDataLoaded()) {
      return (
        <tbody>
        {this.createPlaceholder()}
        </tbody>
      )
    }
    else {

      return (
        <tbody>
          {products.map((lop, index) => (
            <tr key={index}>
              <td>{lop.ProductName}</td>
              <td>{lop.SKU}</td>
              <td>{lop.StockQuantity}</td>
              <td>{lop.WholesaleCost}</td>
              <td>{lop.SalePrice}</td>
              <td>{lop.Notes}</td>
              <td><button onClick={this.handleDelete} className={"btn btn-danger btn-sm"} id={lop.id}>Delete</button><button onClick={this.handleEdit} className={"btn btn-primary btn-sm"} id={lop.id}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      )
    }
  }
}

// const connectedTable = ({products}) => (
//     <tbody>
//       {products.map((lop,index) => (
//         <tr key={index}>
//           <td>{lop.ProductName}</td>
//           <td>{lop.SKU}</td>
//           <td>{lop.StockQuantity}</td>
//           <td>{lop.WholesaleCost}</td>
//           <td>{lop.SalePrice}</td>
//           <td>{lop.Notes}</td>
//           <td><button className={"btn btn-danger btn-sm"}>Delete</button></td>
//         </tr>
//       ))}
//     </tbody>
//)

const TableBody = connect(mapStateToProps, mapDispatchtoProps)(connectedTables);

export default TableBody;




// class tableBody extends Component{

//     MakeTableBody(data) {
//         return data.map((row,index) => {
//             const {ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, QuantitySold, GrossSale, NetSale, Notes} = row ;
//             return (
//                 <tr>
//                     <td>{ProductName}</td>
//                     <td>{SKU}</td>
//                     <td>{StockQuantity}</td>
//                     <td>{WholesaleCost}</td>
//                     <td>{SalePrice}</td>
//                     <td>{QuantitySold}</td>
//                     <td>{GrossSale}</td>
//                     <td>{NetSale}</td>
//                     <td>{Notes}</td>
//                 </tr>
//             )
//         })
//     }
//     render(){
//         return(
//             <tbody>
//                 {this.MakeTableBody(this.state.products)}
//             </tbody>
//         )
//     };
// }

// class MakeRow extends Component{
//     render(){
//         return(
//             <tr>
//                 <MakeCell />
//             </tr>
//         )
//     };
// }
// class MakeCell extends Component{
//     render(){
//         return(
//             <td></td>
//         )
//     };
// }
// export default tableBody;