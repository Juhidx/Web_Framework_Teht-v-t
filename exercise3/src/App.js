import styles from './App.module.css';
import React, { Component } from 'react';
import {seagate, rokuExpress, rokuStreamingStick, sceptre, rokuUltra, logitech, wd, sanDisk, charger} from './components/Data.js';
import BestSellerIMG from './components/images/Best_Seller.png'

import Product from './components/Product.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',

      Products: [
        {
          product: seagate
        },
        {
          product: rokuExpress
        },
        {
          product: rokuStreamingStick
        },
        {
          product: sceptre
        },
        {
          product: rokuUltra
        },
        {
          product: logitech
        },
        {
          product: wd
        },
        {
          product: sanDisk
        },
        {
          product: charger
        }
      ]
    }
  }
  
  UpdateSearch = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    let filteredProducts = this.state.Products.filter(
      (object) => {
          return object.product.ProductName.toLowerCase().indexOf(
              this.state.search.toLowerCase()) !== -1;
      }
  )
    return (
      <div className={styles.container}>
        <div>
          Search <input className={styles.formField} type="text" 
            value={this.state.search} onChange={this.UpdateSearch}/>
        </div> 
        <div className={styles.product}>
          {filteredProducts.map((object, index) => <Product data = {object.product} info = {object.Info} bestSellerIMG = {BestSellerIMG} key = {index}/>)}
        </div>  
      </div>
    )
  }
}
