import styles from './Price.module.css';
import React from 'react'

export default function Price(props) {
    return (
        <div className = {styles.container}>
            <span className = {styles.price}>${props.price}</span>
            <div className = {styles.offer}>{props.offer ? <div>${props.offer}</div> : null}</div>
        </div>
    )
}
