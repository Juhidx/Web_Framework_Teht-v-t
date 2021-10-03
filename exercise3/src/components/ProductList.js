import styles from './ProductList.module.css';
import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
    return (
        <div className={styles.container}>
            {props.products.map((object, index) => <Product data = {object.product} key = {index}/>)}
        </div>
    )
}