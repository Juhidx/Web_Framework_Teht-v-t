import styles from './App.module.css';
import React, { Component } from 'react';

import BestSellerIMG from './components/images/Best_Seller.png';
import AdminView from './components/AdminView';
import axios from 'axios';
import Product from './components/Product.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      adminModeActive: false,
      search: '',

      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products')
      .then(response => {
        this.setState({ products: response.data});
      })
      .catch(err => console.log(err));
  }
  
  addNewItem = (name, IMG, info, price) => {
    axios.put('http://localhost:4000/product', {
      name: name,
      img: IMG,
      info: info,
      price: price
    })
  }

  deleteItem = (productID) => {
    axios.delete(`http://localhost:4000/product/${productID}`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  UpdateSearch = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    let filteredProducts = this.state.products.filter(
      (object) => {
          return object.ProductName.toLowerCase().indexOf(
              this.state.search.toLowerCase()) !== -1;
      }
    )

    let output;
    if(this.state.adminModeActive) {

      output =
        <AdminView
          disableAdminMode = {() => this.setState({adminModeActive: false})} addNewProduct = {this.addNewItem}
          deleteItem = {this.deleteItem} products = {this.state.products}
        />

    } else {

      output = 
      <div className={styles.container}>
        <div>
          Search <input className={styles.formField} type="text" 
            value={this.state.search} onChange={this.UpdateSearch}/>
        </div> 
        <div className={styles.product}>
          {filteredProducts.map((object, index) => <Product data = {object} bestSellerIMG = {BestSellerIMG} key = {index}/>)}
        </div>  
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
      </div>

    }

    return (
      <>
        {output}
      </>
    )
  }
}
