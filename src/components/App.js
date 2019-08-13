import React from 'react';
// import logo from './logo.svg';
import Header from '../containers/header';
import DataList from '../containers/datalist';
import '../App.css';
import ProductData from '../containers/AddProduct';

const App = () => (
  <div className="row m-0">
    <Header />
    <div className="col-12">
    <div className="row">
      <div className="col-8">
        <DataList />
      </div>
      <div className="col-4">
        <ProductData />

      </div>
    </div>
    </div>
  </div>
);

export default App;
