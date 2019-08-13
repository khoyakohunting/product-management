import React, { Component } from "react";

const headings = [
  "Product name",
  "SKU",
  "Stock quantity",
  "Wholesale cost",
  "Sale price",
  "Notes",
  "Actions"
];
//   mapping heading data to thead
const headingCells = headings.map((headcells,index) => <th key={index}>{headcells}</th>);
class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>{headingCells}</tr>
      </thead>
    );
  }
}

export default TableHead;
