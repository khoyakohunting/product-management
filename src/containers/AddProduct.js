import React, { Component } from 'react';
import { addProduct, updateProduct } from '../actions/index';
import { connect } from 'react-redux';
import uuidvproduct from 'uuid';
function mapDispatchToProps(dispatch) {
    return {
        addProduct: product => dispatch(addProduct(product)),
        updateProduct: product => dispatch(updateProduct(product))
    };
}
const mapStateToProps = state => {
    return {
        eproduct: state.eproduct,
        isEditing: state.isEditing
    };
}

const formFields = [
    {
        name: "ProductName",
        type: "text",
        placeholder: "Please Enter Product Name",
        required: true
    },
    {
        name: "ProductName",
        type: "text",
        placeholder: "Please Enter Product Name",
        required: true
    }
]

class productAddForm extends Component {

    constructor(props) {
        super(props);
            this.state = {
                ProductName: "",
                ProductName: "",
                SKU: "",
                StockQuantity: "",
                WholesaleCost: "",
                SalePrice: "",
                Notes: ""
            };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);      
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log(!this.props.isEditing)
        if (!this.props.isEditing) {
            //console.log("added")
            const { ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes } = this.state;
            const id = uuidvproduct();
            this.props.addProduct({ ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes, id });

        }
        else{
            //console.log("Updated")
            const id = this.props.eproduct.id;
            const { ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes } = this.state;
             this.props.updateProduct({ ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes, id });
        }
        this.setState({
                ProductName: "",
                SKU: "",
                StockQuantity: "",
                WholesaleCost: "",
                SalePrice: "",
                Notes: ""
        });
    }
    handleEdit(event) {
        event.preventDefault();
        const { ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes, id } = this.state;
    }

//     componentDidMount(){
//         this.setState(this.props.eproduct)
//     }
//      componentDidUpdate(){
//         this.state = {ProductName: "sssss"};
//  }


    // MakeformFields() {
    //             return formFields.map((fieldName,index) => {
    //                 return (
    //                     <div className={"form-group"}>
    //                         <label>{fieldName}</label>
    //                         <input
    //                         className={"form-control"} 
    //                         placeholder="Enter "
    //                         type="text"
    //                         id={fieldName}
    //                         value={ fieldName }
    //                         onChange={this.handleChange}
    //                         />
    //                     </div>
    //                 )
    //             })
    //         }
componentWillReceiveProps(nextProps){
    //console.log("dsad",this.props)
    if ((nextProps.eproduct !== this.props.eproduct) && !this.props.isEditing) {
        this.setState(nextProps.eproduct);
      }
      else{
        this.setState({
            ProductName: "",
            SKU: "",
            StockQuantity: "",
            WholesaleCost: "",
            SalePrice: "",
            Notes: ""
    });
      }

}
    render() {
        // console.log("eproducts",this.props.isEditing)
        // if(this.props.isEditing){
        //     this.state = this.props.eproduct;
        // }
        const { ProductName, SKU, StockQuantity, WholesaleCost, SalePrice, Notes } = this.state;
        return (
            <div className={""}>
                <form onSubmit={this.handleSubmit}>
                    <div className={""}>

                        {/* {this.MakeformFields()} */}
                        <div className={"form-group"}>
                            <label>Product Name</label>
                            <input
                                className={"form-control"}
                                placeholder="Enter Product Name"
                                type="text"
                                id="ProductName"
                                value={ProductName}
                                required={true}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"form-group"}>
                            <label>SKU</label>
                            <input
                                className={"form-control"}
                                placeholder="Enter SKU"
                                type="text"
                                id="SKU"
                                value={SKU}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"form-group"}>
                            <label>Stock Quantity</label>
                            <input
                                className={"form-control"}
                                placeholder="Stock Quantity"
                                type="text"
                                id="StockQuantity"
                                required={true}
                                value={StockQuantity}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"form-group"}>
                            <label>Wholesale Cost</label>
                            <input
                                className={"form-control"}
                                placeholder="Wholesale Cost"
                                type="text"
                                id="WholesaleCost"
                                required={false}
                                value={WholesaleCost}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"form-group"}>
                            <label>Sales Price</label>
                            <input
                                className={"form-control"}
                                placeholder="Sales Price"
                                type="text"
                                id="SalePrice"
                                required={true}
                                value={SalePrice}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={"form-group"}>
                            <label>Notes</label>
                            <input
                                className={"form-control"}
                                placeholder="Notes"
                                type="text"
                                id="Notes"
                                value={Notes}
                                onChange={this.handleChange}
                            />
                        </div>



                    </div>
                    <div className={"row"}>
                        <button type="submit" className="btn btn-success btn-lg m-auto">SAVE</button>
                    </div>
                </form>
            </div>
        )
    }
}
const ProductData = connect(mapStateToProps, mapDispatchToProps)(productAddForm);

export default ProductData;