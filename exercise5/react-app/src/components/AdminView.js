import React, {useState} from 'react'
import styles from './AdminView.module.css'

export default function AdminView(props) {
    const [newProductName, setNewProductName] = useState("");
    const [newProductIMG, setNewProductIMG] = useState("");
    const [newProductInfo, setNewProductInfo] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");

    const addNewProduct = () => {
        props.addNewProduct(newProductName, newProductIMG, newProductInfo, newProductPrice);
    }

    const deleteItem = (itemID) => {
        props.deleteItem(itemID);
    }

    return (
        <div>
            <button onClick = {props.disableAdminMode}>Disable admin mode</button>
            <div>
                <h1>Add new item</h1>
                <div>
                    Name <input type="text" onChange = {(event) => setNewProductName(event.target.value)}/>
                </div>
                <div>
                    Image as HTML <input type="text" onChange = {(event) => setNewProductIMG(event.target.value)}/>
                </div>
                <div>
                    Info <input type="Text" onChange = {(event) => setNewProductInfo(event.target.value)}/>
                </div>
                <div>
                    Price <input type="Text" onChange = {(event) => setNewProductPrice(event.target.value)}/>
                </div>
                <button onClick = {addNewProduct}>Add new product</button>
            </div>
            <h1>List of products</h1>
            {props.products.map((product, index) => 
                <div key={index}>
                    <button onClick = {() => deleteItem(product.id)}>Delete product</button> 
                    <span className={styles.productInfo}>Product Name: </span> {product.ProductName}
                    <span className={styles.productInfo}>Product Price: </span> {product.Price}
                    <span className={styles.productInfo}>Product Info: </span> {product.Info}
                </div>
            )}
        </div>
    )
}
